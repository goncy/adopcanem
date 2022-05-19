import {Box, Grid, Text, GridItem, Container, useBreakpointValue} from "@chakra-ui/react";
import React from "react";

const FamilySection: React.FC = () => {
  const display = useBreakpointValue({base: 'none', md: 'block' })
  const colspan = useBreakpointValue({ base: 1, md: 2 })

  return (
    <Container maxWidth="container.xl">
      <Grid
        backgroundColor="white"
        gap={3}
        py={[5, 10]}
        templateColumns={{ base:'0 repeat(4, 1fr) 0', md:'repeat(6, 1fr)' }}
        templateRows="repeat(3, 1fr)"
        position='relative'
        overflow='hidden'
      >
        <GridItem
          backgroundImage="url(https://www.etapainfantil.com/wp-content/uploads/2017/08/perros-familia-700x467.jpg)"
          backgroundPosition="center center"
          backgroundSize="cover"
          borderRadius="2xl"
          minHeight={ 40}
          display={ display }
        />
        <GridItem
          backgroundImage="url(https://www.grupoyaakun.com/wp-content/uploads/2019/01/perro-familia.jpg)"
          backgroundPosition="center center"
          backgroundSize="cover"
          borderRadius="2xl"
          colStart={2}
        />
        <GridItem
          backgroundImage="url(https://previews.123rf.com/images/stockbroker/stockbroker1507/stockbroker150706401/42310095-familia-que-se-relaja-en-jard%C3%ADn-con-perro-de-mascota.jpg)"
          backgroundPosition="center center"
          backgroundSize="cover"
          borderRadius="2xl"
          colSpan={2}
          rowSpan={3}
          colStart={3}
        >
          <Box 
          bgGradient={'linear-gradient(0deg, gray.900 0%, transparent 30%)'}
          borderRadius='2xl'
          alignItems="flex-end" display="flex" h="100%" minHeight={80} justifyContent="center" padding={ [2, 5, 10]}>
            <Text align="center" color="white" fontSize={['2xl',null,  '4xl']} fontWeight={700}>
              Abraza la Familia
            </Text>
          </Box>
        </GridItem>
        <GridItem
          backgroundImage="url(https://sumedico.blob.core.windows.net/images/2021/07/09/goldenretrieverconsufamilia.jpg)"
          backgroundPosition="center center"
          backgroundSize="cover"
          borderRadius="2xl"
          rowSpan={2}
          colStart={5}
        />
        <GridItem
          backgroundImage="url(https://img.freepik.com/foto-gratis/nino-jugando-sus-perros-al-aire-libre-familia_23-2148647817.jpg?size=626&ext=jpg)"
          backgroundPosition="center center"
          backgroundSize="cover"
          borderRadius="2xl"
          display={ display }

        />
        <GridItem
          backgroundImage="url(https://gestion.portalbiesa.com/redaccio/arxius/imatges/201810/770_1538733285blog_post_familia_1.jpg)"
          backgroundPosition="center center"
          backgroundSize="cover"
          borderRadius="2xl"
          colSpan={ colspan }
          colEnd={3}
          // display={ display }
        />
        <GridItem
          backgroundImage="url(https://www.hola.com/imagenes/mascotas/20211014197674/educar-ninos-perros-convivencia-sin-problema-dn/1-6-902/como-educar-perros-ninos-convivencia-sin-problemas-t.jpg)"
          backgroundPosition="center center"
          backgroundSize="cover"
          borderRadius="2xl"
          display={ display }
        />
        <GridItem
          backgroundImage="url(https://blog-cdn.dogbuddy.com/wp-content/uploads/2016/04/child-with-a-dog-e1461229430570.jpg)"
          backgroundPosition="center center"
          backgroundSize="cover"
          borderRadius="2xl"
          display={display}
        />
        <GridItem
          backgroundImage="url(https://www.mdzol.com/u/fotografias/m/2021/5/1/f608x342-1051087_1080810_15.jpg)"
          backgroundPosition="center center"
          backgroundSize="cover"
          borderRadius="2xl"
          colStart={2}
        />
        <GridItem
          backgroundImage="url(https://www.65ymas.com/uploads/s1/18/90/26/primeras-pautas-a-seguir-con-un-perro-recie-n-adoptado.jpeg)"
          backgroundPosition="center center"
          backgroundSize="cover"
          borderRadius="2xl"
          colSpan={ colspan }
          colStart={5}
        >
        </GridItem>
      </Grid>
    </Container>
  );
};

export default FamilySection;
