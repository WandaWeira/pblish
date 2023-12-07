import {
  MusicalNoteIcon,
  FolderIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import CardItem from "../CardItem";

const ProducerDashboard = () => {
  return (
    <div className="mx-2 sm:mx-5">
      <div className="mt-2 sm:mt-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5 mt-4 sm:mt-8">
          <CardItem
            link="/dashboard/beats"
            title="Beats"
            desc="123"
            icon={
              <FolderIcon className="h-6 w-6 sm:h-10 sm:w-10 text-customBlack font-semibold" />
            }
          />
          <CardItem
            link="/dashboard/vocals"
            title="Vocals"
            desc="13"
            icon={
              <FolderIcon className="h-6 w-6 sm:h-10 sm:w-10 text-customBlack font-semibold" />
            }
          />
          <CardItem
            link="/dashboard/music"
            title="Music"
            desc="100"
            icon={
              <MusicalNoteIcon className="h-6 w-6 sm:h-10 sm:w-10 text-customBlack font-semibold" />
            }
          />
          <CardItem
            link="/dashboard/artists"
            title="Collaborations"
            desc="13"
            icon={
              <UserIcon className="h-6 w-6 sm:h-10 sm:w-10 text-customBlack font-semibold" />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ProducerDashboard;
