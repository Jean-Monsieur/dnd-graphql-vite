import * as React from "react";
import BarChartIcon from "@mui/icons-material/BarChart";
import CastleIcon from "@mui/icons-material/Castle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShieldIcon from "@mui/icons-material/Shield";
import {
  GetMonstersListQuery,
  MonsterArmorClass,
  MonsterSpeed,
} from "../../generated/graphql";
import { MuiTable } from "../table";
import "./styles.css";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";

interface Props {
  data: GetMonstersListQuery;
}

const MonsterList: React.FC<Props> = ({ data }) => {
  const columns: GridColDef[] = [
    {
      field: "name",
      flex: 1,
      headerName: "name",
      renderHeader: () => (
        <>
          <CastleIcon sx={{ mr: "1rem" }} />
          {"Name  "}
        </>
      ),
    },
    {
      field: "challenge_rating",
      flex: 0.3,
      resizable: false,
      headerName: "Challenge Rating",
      type: "number",
      renderHeader: () => (
        <>
          {"Challenge Rating  "}
          <BarChartIcon sx={{ mr: "1rem" }} />
        </>
      ),
    },
    {
      field: "hit_dice",
      flex: 0.3,
      resizable: false,
      headerName: "Hit Dice",

      renderHeader: () => (
        <>
          <FavoriteIcon sx={{ mr: "1rem" }} />
          {" Hit Dice "}
        </>
      ),
    },
    {
      field: "hit_points",
      flex: 0.3,
      resizable: false,
      headerName: "Hit points",
      renderHeader: () => (
        <>
          <FavoriteIcon sx={{ mr: "1rem" }} />
          {" Hit Points "}
        </>
      ),
    },
    {
      field: "type",
      flex: 0.3,
      resizable: false,
      headerName: "Type",
    },
    {
      field: "speed",
      resizable: true,
      headerName: "Speed",
      renderHeader: () => <>{" Speed (🏃 Walk / ⛰️ Climb /🏊🏻Swim/ 🐤 Fly)"}</>,
      renderCell: (params: GridRenderCellParams<MonsterSpeed>) => (
        <>
          {params?.value?.walk} / {params?.value?.climb ?? " - "} /{" "}
          {params?.value?.swim ?? " - "}/{params?.value?.fly}
        </>
      ),
    },
    {
      field: "armor_class",
      flex: 0.3,
      resizable: false,
      headerName: "AC",
      renderHeader: () => (
        <>
          <ShieldIcon sx={{ mr: "1rem" }} />
          {"AC"}
        </>
      ),
      renderCell(params: GridRenderCellParams<MonsterArmorClass>) {
        return (
          <>
            <ShieldIcon sx={{ mr: "1rem" }} />
            {params?.value[0].value}
          </>
        );
      },
    },

    {
      field: "strength",
      flex: 0.3,
      resizable: false,
      headerName: "Str",
    },
    {
      field: "dexterity",
      flex: 0.3,
      resizable: false,
      headerName: "Dex",
    },
    {
      field: "constitution",
      flex: 0.3,
      resizable: false,
      headerName: "Con",
    },
    {
      field: "wisdom",
      flex: 0.3,
      resizable: false,
      headerName: "Wis",
    },
    {
      field: "intelligence",
      flex: 0.3,
      resizable: false,
      headerName: "Int",
    },
    {
      field: "charisma",
      flex: 0.3,
      resizable: false,
      headerName: "Cha",
    },
  ];

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flexGrow: 1 }}>
        <MuiTable
          autoHeight={true}
          columns={columns}
          rows={data?.monsters?.map((m) => ({ ...m, id: m.name })) ?? []}
          onRowDoubleClick={({ id }) => console.log(id)}
        />
      </div>
    </div>
  );
};

export default MonsterList;
