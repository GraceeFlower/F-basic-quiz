import axios from "axios";
import { getEducations, getProfile } from "../script/askForData";

jest.mock("axios");

describe("ask for data", () => {
  beforeEach(() => {
    axios.get.mockClear();
  });

  it("should get profile", async () => {
    const profile = getProfile();
    await expect(profile).resolves.toEqual({});
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  it("should get educations", async () => {
    const educations = getEducations();
    await expect(educations).resolves.toEqual({});
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});
