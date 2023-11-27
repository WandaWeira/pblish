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
            link="/beats"
            color="bg-sky-300"
            title="Beats"
            desc="123"
            icon={
              <FolderIcon className="h-10 w-10 text-darkGray font-semibold" />
            }
          />
          <CardItem
            link="/beats"
            color="bg-teal-300"
            title="My Uploads"
            desc="13"
            icon={
              <FolderIcon className="h-10 w-10 text-darkGray font-semibold" />
            }
          />
          <CardItem
            link="/beats"
            color="bg-indigo-300"
            title="Music"
            desc="100"
            icon={
              <MusicalNoteIcon className="h-10 w-10 text-darkGray font-semibold" />
            }
          />
          <CardItem
            link="/beats"
            color="bg-blue-300"
            title="Artists collaboration"
            desc="13"
            icon={
              <UserIcon className="h-10 w-10 text-darkGray font-semibold" />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ProducerDashboard;
