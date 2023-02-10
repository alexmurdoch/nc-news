import { useCallback, useState } from "react";
import { patchVotes } from "../api";

export const AddVotes = (props) => {
  const [votesChange, setVotesChange] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [voteResponse, setVoteResponse] =useState("")
  const incVotes = useCallback(async () => {
    setIsLoading(true);
    await patchVotes(props.article_id, votesChange + props.currentVotes);

    setVotesChange(votesChange + 1);
    setIsLoading(false);
    setVoteResponse("Vote added")
  }, [votesChange, props.article_id, props.currentVotes]);

  return (
    <section className="upvote">
      {isLoading ? (
        <p>LOADING</p>
      ) : (
        <>
          <p> Votes: {votesChange + props.currentVotes}</p>
          <p>{voteResponse}</p>
          <button onClick={incVotes}>VOTE</button>
        </>
      )}
    </section>
  );
};
