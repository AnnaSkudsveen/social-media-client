import { login } from "../js/api/auth/login.js";
import { apiPath } from "../js/api/constants.js";
import { headers } from "../js/api/headers.js";
import { save } from "../js/storage/index.js";

jest.mock("../js/storage/index.js");

const mockFetchSuccess = jest.fn().mockResolvedValue({
  ok: true,
  json: jest
    .fn()
    .mockResolvedValue({ accessToken: "fake-token", otherData: {} }),
});

global.fetch = mockFetchSuccess;

describe("login function", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("It should send a fetch request and recieve a token", async () => {
    const email = "test@example.com";
    const password = "password123";

    const profile = await login(email, password);

    expect(fetch).toHaveBeenCalledWith(`${apiPath}/social/auth/login`, {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: headers("application/json"),
    });

    expect(mockFetchSuccess).toHaveBeenCalled();

    expect(profile).toEqual({ otherData: {} });
  });

  test("It should save the access token to localStorage", async () => {
    const email = "test@example.com";
    const password = "password123";

    await login(email, password);

    expect(save).toHaveBeenCalledWith("profile", {
      otherData: {},
    });
  });
});
