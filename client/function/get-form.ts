import axios from "axios";
import type { GetToken } from "@clerk/types";
import { getAPIUrl } from "@/utils/urlUtils";

export const getForm = async (
  isSignedIn: boolean | undefined,
  isLoaded: boolean,
  userId: string | null | undefined,
  getToken: GetToken,
) => {
  if (!isSignedIn || !isLoaded) return;

  try {
    const url = getAPIUrl("forms");
    const token = await getToken();
    const res = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        userid: userId,
      },
    });

    if (res.status === 200) return res.data;

    // handle error
  } catch (err) {
    throw err;
  }
};
