import profile from "../Assets/icons_FEtask/profile-user.png";
import profile1 from "../Assets/icons_FEtask/profile-user1.png";
import profile2 from "../Assets/icons_FEtask/profile-user2.png";
import profile3 from "../Assets/icons_FEtask/profile-user3.png";
import profile4 from "../Assets/icons_FEtask/profile-user4.png";
import profile5 from "../Assets/icons_FEtask/profile-user5.png";

const Card = ({
  id,
  title,
  tag,
  userId,
  userData,
  status,
  priority,
  grouping,
  ordering,
  statusMapping,
}) => {
  const user = userData.find((user) => user.id === userId);

  return (
    <div className="card">
      <div className="card-header">
        <div className="status-heading">
          {grouping === "users" || grouping === "priority" ? (
            statusMapping[id] === "Todo" ? (
              <i className="bx bx-circle" id="todo"></i>
            ) : statusMapping[id] === "In progress" ? (
              <i className="bx bx-adjust" id="progress"></i>
            ) : statusMapping[id] === "Backlog" ? (
              <i className="bx bx-task-x" id="backlog"></i>
            ) : statusMapping[id] === "Done" ? (
              <i className="bx bxs-check-circle" id="done"></i>
            ) : (
              <i className="bx bxs-x-circle" id="cancel"></i>
            )
          ) : null}
          <p>{id}</p>
        </div>
        {grouping !== "users" ? (
          <div
            className={
              user && !user.available
                ? "user-avatar-unavailable"
                : "user-avatar"
            }
          >
            <img
              src={
                userId === "usr-1"
                ? profile1
                : userId === "usr-2"
                ? profile2
                : userId === "usr-3"
                ? profile3
                : userId === "usr-4"
                ? profile4
                : userId === "usr-5"
                ? profile5
                : profile
              }
              className={
                user && !user.available
                  ? "user-avatar-unavailable"
                  : "user-avatar"
              }
              alt="user"
            ></img>
          </div>
        ) : null}
      </div>
      <div className="card-title">
        <p>{title}</p>
      </div>
      <div className="card-footer">
        {grouping !== "priority" ? (
          <div className="feature-container">
            {priority === "0" ? (
              <i className="bx bx-dots-horizontal-rounded"></i>
            ) : priority === "1" ? (
              <i className="bx bx-dots-horizontal-rounded"></i>
            ) : priority === "2" ? (
              <i className="bx bx-dots-horizontal-rounded"></i>
            ) : priority === "3" ? (
              <i className="bx bx-signal-4"></i>
            ) : (
              <i className="bx bx-dots-horizontal-rounded"></i>
            )}
          </div>
        ) : null}
        {tag?.map((value, index) => {
          return (
            <div className="feature-container" key={index}>
              <div className="alert-icon"></div>
              <div className="feature-request">{value}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
