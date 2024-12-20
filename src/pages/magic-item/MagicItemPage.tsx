import { useHistory, useParams } from "react-router-dom";
import ItemPageSkeletons from "../equipment/ItemPageSkeletons";
import ErrorPage from "../../components/error-page/ErrorPage";
import { GET_MAGIC_ITEM } from "./MagicItemQuery";
import { useQuery } from "@apollo/client";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

const MagicItemPage = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  const { loading, error, data } = useQuery(GET_MAGIC_ITEM, {
    variables: { index: id },
  });

  if (loading) {
    return <ItemPageSkeletons />;
  }

  if (error || !data || data.equipment === null) {
    return <ErrorPage errorCode={500} />;
  }

  return (
    <>
      <div>
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              {data.magicItem.name}
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {data.magicItem.equipment_category?.name}
            </Typography>
            {data.rarity && (
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                RARITY: {data.magicItem.rarity.toString()}
              </Typography>
            )}
            <Typography
              variant="body2"
              sx={{ mb: 1.5, textJustify: "left", marginTop: "4em" }}
            >
              {data.magicItem.desc?.map(
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
            {data.magicItem.image && (
              <img
                width={200}
                src={"https://www.dnd5eapi.co" + data.magicItem.image}
                alt={data.magicItem.image}
              />
            )}
          </CardContent>
          <CardActions>
            <Button onClick={() => history.goBack()} size="small">
              Go Back !!!!
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
};

export default MagicItemPage;
