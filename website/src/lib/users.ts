import parser from "accept-language-parser";
import type { NextApiRequest } from "next";
import prisma from "src/lib/prismadb";
import type { BackendUserCore } from "src/types/Users";

const getUserLanguage = (req: NextApiRequest) => {
  const cookieLanguage = req.cookies["NEXT_LOCALE"];
  if (cookieLanguage) {
    return cookieLanguage;
  }
  const headerLanguages = parser.parse(req.headers["accept-language"]);
  if (headerLanguages.length > 0) {
    return headerLanguages[0].code;
  }
  return "en";
};

/**
 * Returns a `BackendUserCore` that can be used for interacting with the Backend service.
 *
 * @param {string} id The user's web auth id.
 *
 * @return {BackendUserCore} The most specific auth type and id for the user.
 */
const getBackendUserCore = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      accounts: true,
    },
  });

  // If there are no linked accounts, just use what we have locally.
  if (user.accounts.length === 0) {
    return {
      id: user.id,
      display_name: user.name,
      auth_method: "local",
    } as BackendUserCore;
  }

  // Otherwise, use the first linked account that the user created.
  return {
    id: user.accounts[0].providerAccountId,
    display_name: user.name,
    auth_method: user.accounts[0].provider,
  } as BackendUserCore;
};

export { getBackendUserCore, getUserLanguage };
