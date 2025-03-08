import { ListWrapper } from "@src/components/ListWrapper";
import { UserInterface } from "@src/types/UserInterface";
import { getUrl, IDENTIFIERS, Link } from "@src/utils";
import { useLoaderData } from "react-router";

export function UserList() {
  const users = useLoaderData<UserInterface[]>();
  return (
    <>
      <h1>List of users</h1>
      <Link to={getUrl(IDENTIFIERS.USER_ADD)}>Add new user</Link>
      <br />
      <br />
      <ListWrapper>
        {users.map((user: UserInterface) => (
          <Link
            to={getUrl(IDENTIFIERS.USER_VIEW, { userId: user.id })}
            key={user.id}
          >
            {JSON.stringify(user)}
          </Link>
        ))}
      </ListWrapper>
    </>
  );
}
