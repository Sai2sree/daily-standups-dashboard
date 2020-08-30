export const filterIssues = (res) => {
  let assignees = {};
  res.forEach((issue) => {
    let today = new Date();
    let twoMonthsOldDate = today.setMonth(today.getMonth() - 2);
    let issueCreationDate = issue["created_at"];
    if (Date.parse(issueCreationDate) > twoMonthsOldDate) {
      let assignee = issue.assignee;
      if (assignee) {
        let issues = [];
        let priorityColor = "";
        issue.labels.forEach((label) => {
          if (label.name === "I'm On It!") {
            issues.push({
              title: issue.title,
              id: issue.id,
              priorityColor: "",
            });
          } else {
            if (label.name.includes("Priority")) {
              priorityColor = label.color;
            }
          }
        });
        if (issues.length) {
          issues[0].priorityColor = priorityColor;
        }
        if (assignees[assignee.login]) {
          assignees[assignee.login].issues.push(...issues);
        } else {
          assignees[assignee.login] = {
            id: assignee.id,
            name: assignee.login,
            issues: issues,
          };
        }
      }
    }
  });
  return Object.values(assignees);
};
