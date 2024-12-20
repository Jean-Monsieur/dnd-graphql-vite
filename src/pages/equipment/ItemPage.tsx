import React from "react";
import { useParams, useHistory } from "react-router-dom";
import convertWeightUnit from "../../utils/convertWeightUnit";
import { convertgQLCurrency } from "../../utils/convertGqlCurrency";
import { CurrencyIcon } from "../../components/currency-icon";
import { DistanceUnitDisplay } from "../../components/converted-units";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import Icon from "@mdi/react";
import Looks3Icon from "@mui/icons-material/Looks3";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import MoneyIcon from "@mui/icons-material/Money";
import {
  mdiDiceD20,
  mdiDiceD10,
  mdiDiceD12,
  mdiDiceD6,
  mdiDiceD4,
  mdiDiceD8,
} from "@mdi/js";
import ErrorPage from "../../components/error-page/ErrorPage";
import ItemPageSkeletons from "./ItemPageSkeletons";
import { GqlCurrencies, WeightUnit } from "../../types";
import { GET_EQUIPMENT } from "./itemQuery";
import { useQuery } from "@apollo/client";

const ItemPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  const { loading, error, data } = useQuery(GET_EQUIPMENT, {
    variables: { index: id },
  });

  if (loading) {
    return <ItemPageSkeletons />;
  }

  if (error || !data || data.equipment === null) {
    return <ErrorPage errorCode={500} />;
  }

  const getDamageDieIcon = (die: string) => {
    const x = die.toUpperCase();
    const dieIconsMap: { [key: string]: JSX.Element } = {
      D100: <MoneyIcon />,
      D12: <Icon path={mdiDiceD12} size={1} horizontal vertical rotate={180} />,
      D10: <Icon path={mdiDiceD10} size={1} horizontal vertical rotate={180} />,
      D1: <LooksOneIcon />,
      D20: <Icon path={mdiDiceD20} size={1} horizontal vertical rotate={180} />,
      D2: <LooksTwoIcon />,
      D8: <Icon path={mdiDiceD8} size={1} horizontal vertical rotate={180} />,
      D6: <Icon path={mdiDiceD6} size={1} horizontal vertical rotate={180} />,
      D4: <Icon path={mdiDiceD4} size={1} horizontal vertical rotate={180} />,
      D3: <Looks3Icon />,
    };

    for (const key in dieIconsMap) {
      if (x.includes(key)) {
        return dieIconsMap[key];
      }
    }
    return null;
  };

  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            {data.equipment?.name}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {data.equipment?.equipment_category?.name}
          </Typography>
          {data.equipment?.cost && (
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Cost: {data.equipment?.cost?.quantity}
              <CurrencyIcon
                currency={convertgQLCurrency(
                  data.equipment?.cost?.unit as GqlCurrencies,
                )}
              />
            </Typography>
          )}
          {data.equipment?.weight && (
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Weight: {data.equipment?.weight} lbs
              {convertWeightUnit(
                data.equipment?.weight,
                WeightUnit.LBS,
                WeightUnit.KG,
              )}
              Kg.
            </Typography>
          )}
          {data.equipment?.range && (
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              <div>
                Range: (Normal)
                <DistanceUnitDisplay
                  initialValue={
                    data.equipment?.range?.normal?.toString() ?? "NA"
                  }
                />
              </div>
              <div>
                Long:
                <DistanceUnitDisplay
                  initialValue={data.equipment?.range?.long?.toString() ?? "NA"}
                />
              </div>
            </Typography>
          )}
          {data.equipment?.armor_class?.base && (
            <Typography
              sx={{ fontSize: 14, mb: ["1em", "4em"] }}
              color="text.secondary"
              gutterBottom
            >
              Armor: {data.equipment?.armor_class?.base}
              {", "}
              {data.equipment?.armor_category}
            </Typography>
          )}
          {data.equipment?.damage && (
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Damage:
              {getDamageDieIcon(data.equipment?.damage?.damage_dice ?? "12d3")}
              {data.equipment?.damage?.damage_dice}
              {data.equipment?.damage?.damage_type?.name}
            </Typography>
          )}
          {data.equipment?.capacity && (
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Capacity {data.equipment?.capacity}
            </Typography>
          )}
          {data.equipment?.category_range && (
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Category Range {data.equipment?.category_range}
            </Typography>
          )}
          {data.equipment?.contents && (
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Contents
              {data.equipment?.contents.map(
                (
                  c: {
                    item: {
                      name:
                        | boolean
                        | React.ReactChild
                        | React.ReactFragment
                        | React.ReactPortal
                        | null
                        | undefined;
                    };
                    quantity:
                      | boolean
                      | React.ReactChild
                      | React.ReactFragment
                      | React.ReactPortal
                      | null
                      | undefined;
                  },
                  index: React.Key | null | undefined,
                ) => (
                  <div key={index}>
                    {c?.item?.name} {c?.quantity}
                  </div>
                ),
              )}
            </Typography>
          )}
          <Typography
            variant="body2"
            sx={{ mb: 1.5, textJustify: "left", marginTop: "4em" }}
          >
            {data.equipment?.desc?.map(
              (
                d:
                  | boolean
                  | React.ReactChild
                  | React.ReactFragment
                  | React.ReactPortal
                  | null
                  | undefined,
                index: React.Key | null | undefined,
              ) => <div key={index}>{d}</div>,
            )}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => history.goBack()} size="small">
            Go Back
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ItemPage;
