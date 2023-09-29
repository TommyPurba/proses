async function getBlogData() {
  const data = await fetch("http://localhost:3000/api/blog");
  const req = await data.json();
  return req;
}

export default async function Page() {
  const { data } = await getBlogData();
  console.log(data);
  return (
    <div className="bg-sky-300">
      <div>
        {data.map(({ tite, autor }) => {
          return (
            <div>
              <div>{tite}</div>
              <div>{autor}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
