import {
  BasicGrid,
  Box,
  Button,
  Container,
  Flex,
  Stack,
  Text,
  VStack
} from '@gsandf/ui';
import React from 'react';
import { Header, Steps } from '../components/Home';
import BasicLayout from '../templates/Basic';

export default function Home() {
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
            href="/immawinner.txt.enc"
            download="immawinner.txt.enc"
            variant="control"
          >
            download file
          </Button>
        </VStack>
      </Flex>

      <Container $maxWidth={800} $px={2} $pt={12} $pb={6}>
        <Stack>
          <Text as="h2">Instructions</Text>

          <Text>
            <ul>
              <li>download the encrypted file</li>
              <li>first to follow directions in file is the winner</li>
              <li>the password is all lowercase with no spaces</li>
              <li>
                the file can be decrypted using the command:{' '}
                <code style={{ display: 'block' }}>
                  openssl enc -d -base64 -blowfish &lt;
                  ~/Downloads/immawinner.txt.enc
                </code>
              </li>
            </ul>
          </Text>
        </Stack>
      </Container>

      <Container $maxWidth={800} $px={2} $py={6}>
        <BasicGrid columns={1} spacing={4}>
          <Steps />
        </BasicGrid>
      </Container>
    </BasicLayout>
  );
}
