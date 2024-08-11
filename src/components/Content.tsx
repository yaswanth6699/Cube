import { useGetRandomImages } from "../hooks/useGetRandomImages";
import { ContentImgTypes, UserTypes } from "../types";

const Content = ({ selectedUser }: { selectedUser: UserTypes }) => {
  // use custom hooks to make code more readable and easy to maintain and easy to debug
  const { data, isLoading } = useGetRandomImages(selectedUser.id);

  return (
    <div className="content">
      <h2>{selectedUser.name}</h2>
      <p>{selectedUser.description}</p>

      {isLoading ? (
        <div className="placeholder">
          <h2>isFetching Images....</h2>
        </div>
      ) : (
        <div className="img-row">
          {data?.map((d: ContentImgTypes) => (
            <img src={d.download_url} alt={d.author} key={d.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Content;
