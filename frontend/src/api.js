export const saveUser = async (form) => {
  const res = await fetch(`http://localhost/save`, {
    method: "POST",
    headers: {
      Accept: "image/jpeg",
      "Content-Type": "multipart/form-data",
    },
    body: form,
  });
  return res.json();
};
