import type { UserResource } from "@clerk/types";

export const useUserInfo = (
  isSignedIn: boolean | undefined,
  isLoaded: boolean,
  user: UserResource | null | undefined,
) => {
  if (!isSignedIn || !isLoaded || !user) return null;

  return {
    name: user.fullName,
    username: user.username,
    email: user.emailAddresses[0].emailAddress,
  };
};
