import { Card, CardBody, Heading, Image, HStack } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";
import getCroppedUrl from "../services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card width="300px" borderRadius={10} overflow={"hidden"}>
      <Image src={getCroppedUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <HStack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
