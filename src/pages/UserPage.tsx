import { BackButtonHeading } from "@src/components/BackButtonHeading";
import { UserInterface } from "@src/types/UserInterface";
import { useLoaderData } from "react-router";

export function UserPage() {
  const user = useLoaderData<UserInterface>();

  return (
    <>
      <BackButtonHeading>
        View user, to check cache revalidation
      </BackButtonHeading>
      <code>{JSON.stringify(user, null, 2)}</code>;
    </>
  );
}
