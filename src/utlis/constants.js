import EventNoteIcon from "@mui/icons-material/EventNote";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ChecklistOutlinedIcon from "@mui/icons-material/ChecklistOutlined";
import SettingsBackupRestoreOutlinedIcon from "@mui/icons-material/SettingsBackupRestoreOutlined";

export const categories = [
  { name: "My Plan", icon: <EventNoteIcon /> },
  { name: "Preventive Exams", icon: <ChecklistOutlinedIcon /> },
  { name: "Provider", icon: <LocalHospitalOutlinedIcon /> },
  { name: "My Profile", icon: <PersonOutlineOutlinedIcon /> },
  { name: "My Reimbursements", icon: <SettingsBackupRestoreOutlinedIcon /> },
];