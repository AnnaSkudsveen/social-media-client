import { logout } from "../js/api/auth/logout.js";
import { remove } from "../js/storage/remove.js";

jest.mock("../js/storage/remove.js", () => ({
  remove: jest.fn(),
}));

describe("logout", () => {
  it("should remove token and profile from localStorage", () => {
    logout();

    expect(remove).toHaveBeenCalledWith("token");
    expect(remove).toHaveBeenCalledWith("profile");

    expect(remove).toHaveBeenCalledTimes(2);
  });
});
