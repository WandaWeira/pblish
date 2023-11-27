// import { MusicalNoteIcon, UploadIcon, CollectionIcon } from '@heroicons/react/outline';
import {
  MusicalNoteIcon,
  FolderIcon,
  UserIcon,
  
} from "@heroicons/react/24/outline";
import CardItem from "../CardItem";
import TopBar from "../Topbar";

const ProducerDashboard = () => {
  return (
    <div className="mx-28">
      <TopBar />
      <div className="mt-4">
        <h1 className="text-2xl">Dashboard / Producer</h1>
        <div className="flex items-center gap-5 mt-8 ">
          <CardItem
            title="Beats"
            desc="123"
            icon={
              <FolderIcon className="h-10 w-10 text-gray-500 font-semibold" />
            }
          />
          <CardItem
            title="My Uploads"
            desc="13"
            icon={
              <FolderIcon className="h-10 w-10 text-gray-500 font-semibold" />
            }
          />
          <CardItem
            title="Music"
            desc="100"
            icon={
              <MusicalNoteIcon className="h-10 w-10 text-gray-500 font-semibold" />
            }
          />
          <CardItem
            title="Artists collaboration"
            desc="13"
            icon={
              <UserIcon className="h-10 w-10 text-gray-500 font-semibold" />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ProducerDashboard;
