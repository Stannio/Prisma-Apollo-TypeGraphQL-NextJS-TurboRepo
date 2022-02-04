import { Button } from "ui";
import { useFeedQuery } from "../graphql/generated/graphql";

export default function Web() {
  const [{ data, fetching }] = useFeedQuery();
  console.log(data, fetching);
  return (
    <div>
      <h1>Web</h1>
      <Button />
    </div>
  );
}
