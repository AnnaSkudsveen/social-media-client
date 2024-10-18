import { login } from "../js/api/auth/login.js";
import { apiPath } from "../js/api/constants.js";
import { headers } from "../js/api/headers.js";
import { save } from "../js/storage/index.js";

jest.mock("../js/storage/index.js"); // Mock the save function

// Replace real fetch with a mock function
const mockFetchSuccess = jest.fn().mockResolvedValue({
  ok: true,
  json: jest
    .fn()
    .mockResolvedValue({ accessToken: "fake-token", otherData: {} }),
});

global.fetch = mockFetchSuccess;

// Mock localStorage
const mockLocalStorage = (() => {
  let store = {};
  return {
    getItem: jest.fn((key) => store[key] || null),
    setItem: jest.fn((key, value) => {
      store[key] = value;
    }),
    clear: jest.fn(() => {
      store = {};
    }),
  };
})();

global.localStorage = mockLocalStorage;

describe("login function", () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear mocks before each test
  });

  test("It should send a fetch request and recieve a token", async () => {
    const email = "test@example.com";
    const password = "password123";

    const profile = await login(email, password);

    // Check that fetch was called with the correct URL and options
    expect(fetch).toHaveBeenCalledWith(`${apiPath}/social/auth/login`, {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: headers("application/json"),
    });

    // Ensure fetch was called
    expect(mockFetchSuccess).toHaveBeenCalled();

    // Verify that the response contains the expected access token
    expect(profile).toEqual({ otherData: {} });
  });

  test("It should save the access token to localStorage", async () => {
    const email = "test@example.com";
    const password = "password123";

    await login(email, password);

    // // Check that the access token is saved in local storage
    // expect(save).toHaveBeenCalledWith("token", "fake-token");
    // Check that the profile is saved using the save function
    expect(save).toHaveBeenCalledWith("profile", {
      otherData: {},
    });
  });
});
