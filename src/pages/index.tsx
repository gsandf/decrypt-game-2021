import {
  BasicGrid,
  Box,
  Button,
  Container,
  Flex,
  Text,
  VStack
} from '@gsandf/ui';
import React from 'react';
import { Card, Header } from '../components/Demo';
import BasicLayout from '../templates/Basic';

export default function Home(): JSX.Element {
  return (
    <BasicLayout
      keywords={['example', 'site', 'GS&F']}
      metaDescription="GS&amp;F Interactive / Dev Team Christmas Challenge - Decrypt Game 2021"
      title="Decrypt Game 2021"
    >
      <Flex as="header" $justifyContent="center" $bgColor="darken" $py={40}>
        <VStack $px={[4, 5]} $maxWidth={['full', '600px']}>
          <Header>Decrypt</Header>
          <Box $height={12} />
          <Button
            as="a"
            href="/favicon.ico"
            download="file.ico"
            variant="control"
          >
            download file
          </Button>
        </VStack>
      </Flex>

      <Container $maxWidth={800} $px={2} $py={12}>
        <BasicGrid columns={1} spacing={4}>
          <Card>
            <Text>
              Use the Christensen Arms “Find My Firearm” tool to find the first
              suggested firearm for short-range recreactional shooting.{'\n'}
              What’s the first 2 letters in its name?
            </Text>
          </Card>

          <Card>
            <Text>
              Use the A. O. Smith at Lowe’s Product Selector Tool.{'\n'}Use the
              first option for every question.{'\n'}Is a tankless water heater
              suggested?
              {'\n'}
              If so, use <code>y</code>, otherwise, use <code>n</code>.
            </Text>
          </Card>

          <Card>
            <Text>
              One of our clients makes MDF panels out of rice straw waste.{'\n'}
              On their careers page are 2 open positions.{'\n'}What’s the first
              letter of the open maintenance position?
            </Text>
          </Card>

          <Card>
            <Text>
              During the 2021 LP Showcase, they released an alternate style of
              their siding.
              {'\n\n'}Was it was a color of concrete siding? If so, use{' '}
              <code>c</code>
              {'\n'}Was it a new length of wood lap siding? If so, use{' '}
              <code>l</code>
              {'\n'}Was it a new texture of wood panel siding? If so, use{' '}
              <code>p</code>
            </Text>
          </Card>

          <Card>
            <Text>
              Benson Hill Seeds carries a single variety of soybean seeds with
              an imperfect yellow hilum.{'\n'}What’s the 1<sup>st</sup> letter
              of its name?
            </Text>
          </Card>

          <Card>
            <Text>
              We have a new radar showing what technologies we are interested
              in, use, or think should be used with caution.{'\n'}What’s the
              first letter of the name of the second ring? (1. Adopt, 2. ?)
            </Text>
          </Card>

          <Card>
            <Text>
              Benson Hill has a site for farmers.{'\n'}Find the page with quotes
              for soybean futures.{'\n'}In the first paragraph, what’s the 6
              <sup>th</sup> word?
            </Text>
          </Card>

          <Card>
            <Text>
              Find the IP address for the Calplant (EurekaMDF) investors’
              server.{'\n'}What's the last octet of the IP address?{'\n'}What
              ASCII character does that number represent?
            </Text>
          </Card>

          <Card>
            <Text>
              One of our clients sells a product with a name like mine.{'\n'}Go
              to their home page and run this script:{'\n'}
              <code>
                h=window.location.host;h[1]+String.fromCharCode(h.charCodeAt(3)-1)
              </code>
            </Text>
          </Card>
        </BasicGrid>
      </Container>
    </BasicLayout>
  );
}
