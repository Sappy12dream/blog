import { useGetPostQuery } from "./Services/PostApi";

function App() {
  const { data, isError, isLoading, isFetching, isSuccess } = useGetPostQuery();

  return (
    <div className=" w-full max-w-[1240px] mx-auto bg-slate-100">
      <div className="w-full bg-white flex items-center h-12">
        <h1 className="text-xl font-extrabold "> Blog.</h1>
      </div>
      <div className="w-full h-full bg-slate-100 min-w-[500px]">
        {isLoading && <p>Loading....</p>}
        {isFetching && <p>isFetching....</p>}
        {isError && <p>Something went wrong</p>}
        {isSuccess && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-5 p-5 ">
            {data?.map((post) => (
              <div key={post.id} className="bg-white p-5">
                <span className="text-green-500"># {post?.id}</span>
                <h1 className="text-normal font-bold">{post?.title}</h1>
                <p className="text-sm">{post?.body}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
