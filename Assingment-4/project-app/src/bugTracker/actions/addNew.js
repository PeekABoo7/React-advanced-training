let currentBugId = 0;

export function addNew(bugName, project) {
  const newBug = {
    id: ++currentBugId,
    name: bugName,
    isClosed: false,
    createdAt: new Date(),
    project: project
  };
  const action = { type: "BUG_ADD_NEW", payload: newBug };
  return action;
}