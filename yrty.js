const getUserEmails = (users) => {
  const emails = users.map((user) => user.email);
  return emails;
};
