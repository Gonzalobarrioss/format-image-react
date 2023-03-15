export const saveUser = async (form) => {
  const res = await fetch(`http://localhost:5000/save`, {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: form,
  });
  return res;
};

export const getPersonas = async () => {
  const res = await fetch(`http://localhost:5000/personas`);
  return res.json();
};
