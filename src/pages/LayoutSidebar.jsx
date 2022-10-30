const LayoutSidebar = () => {
  return (
    <div className="min-h-screen flex">
      <nav className="w-64 flex flex-col">
        <div>
          <div className="py-12 px-8">
            <p className="text-sky-700 font-bold text-3xl">BTEK</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="rounded-md px-4 bg-sky-600 py-3 mx-5">Profile</div>
            <div className="rounded-md px-4 bg-sky-600 py-3 mx-5">Profile</div>
            <div className="rounded-md px-4 bg-sky-600 py-3 mx-5">Profile</div>
          </div>
        </div>
      </nav>
      <main className="flex-1 min-w-0 overflow-auto bg-lime-200 p-24">
        <div className="grid grid-cols-6 gap-4">
          <div className="bg-pink-200 rounded-md p-4">
            <p>Raihan Adam</p>
          </div>
          <div className="bg-pink-200 rounded-md p-4">
            <p>Profile</p>
          </div>
          <div className="bg-pink-200 rounded-md p-4">
            <p>Profile</p>
          </div>
          <div className="bg-pink-200 rounded-md p-4">
            <p>Profile</p>
          </div>
          <div className="bg-pink-200 rounded-md p-4">
            <p>Profile</p>
          </div>
          <div className="bg-pink-200 rounded-md p-4">
            <p>Profile</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LayoutSidebar;
