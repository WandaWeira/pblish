import {
  MusicalNoteIcon,
  FolderIcon,
  UserIcon,
  PlusIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import CardItem from "../CardItem";
import TopBar from "../Topbar";
import Table from "./Table";

const ProducerDashboard = () => {
  return (
    <div className="mx-28">
      <TopBar />
      <div className="mt-4">
        <h1 className="text-2xl">Dashboard / Producer</h1>
        <div className="flex items-center gap-5 mt-8 ">
          <CardItem
            color="bg-sky-300"
            title="Beats"
            desc="123"
            icon={
              <FolderIcon className="h-10 w-10 text-darkGray font-semibold" />
            }
          />
          <CardItem
            color="bg-teal-300"
            title="My Uploads"
            desc="13"
            icon={
              <FolderIcon className="h-10 w-10 text-darkGray font-semibold" />
            }
          />
          <CardItem
            color="bg-indigo-300"
            title="Music"
            desc="100"
            icon={
              <MusicalNoteIcon className="h-10 w-10 text-darkGray font-semibold" />
            }
          />
          <CardItem
            color="bg-blue-300"
            title="Artists collaboration"
            desc="13"
            icon={
              <UserIcon className="h-10 w-10 text-darkGray font-semibold" />
            }
          />
        </div>
        <div className="my-10 flex justify-between items-center">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search beat..."
              className="py-2 pl-8 pr-4 w-[340px] h-[38px] rounded-xl border-2 bg-slate-200 font-normal border-gray-200 focus:outline-none focus:border-gray-300"
              //   onChange={({ target }) => {
              //     setSearchTerm(target.value);
              //     setFilterTerm("");
              //   }}
            />
            <div className="absolute right-3 top-3">
              <MagnifyingGlassIcon className="w-6 h-6 text-darkGray" />
            </div>
          </div>
          <div className="bg-customBlack flex gap-4 items-center rounded-xl p-1 text-customWhite ">
            <PlusIcon className="h-10 w-10 text-customWhite font-semibold" />
            <p className="mx-2"> Upload Beat</p>
          </div>
        </div>
        <div className="my-14">
          <Table totalItems="10" />
        </div>
      </div>
    </div>
  );
};

export default ProducerDashboard;
