import { omit } from '@blakek/deep';
import { Stack, Text, useLocalStorage } from '@gsandf/ui';
import styled, { css } from 'styled-components';

const completedStyle = css`
  opacity: 0.5;
`;

const Card = styled(Stack)<{ completed: boolean }>`
  border-color: ${p => p.theme.colors.gray700};
  border-radius: ${p => p.theme.radii.md};
  border-style: solid;
  border-width: 1px;
  color: inherit;
  padding: ${p => p.theme.space[5]};
  text-decoration: none;
  transition: all 250ms ease;

  :hover,
  :focus,
  :active {
    background-color: ${p => p.theme.colors.darken};
    border-color: ${p => p.theme.colors.darken};
    color: ${p => p.theme.colors.onDarken};
  }

  ${p => p.completed && completedStyle}
`;

export function Steps() {
  const [completedSteps, setCompletedSteps] = useLocalStorage<
    Record<string, boolean>
  >('decryptCompletedSteps', {});

  function toggleStep(stepId: string) {
    return () =>
      setCompletedSteps(previousCompletedSteps => {
        if (stepId in previousCompletedSteps) {
          return omit([stepId], previousCompletedSteps);
        }

        return {
          ...previousCompletedSteps,
          [stepId]: true
        };
      });
  }

  const cardProps = (stepId: string) => ({
    completed: completedSteps[stepId] === true,
    onClick: toggleStep(stepId)
  });

  return (
    <>
      <Card {...cardProps('a')}>
        <Text>
          Use the Christensen Arms “Find My Firearm” tool to find the first
          suggested firearm for short-range recreactional shooting.{'\n'}
          What’s the first 2 letters in its name?
        </Text>
      </Card>

      <Card {...cardProps('b')}>
        <Text>
          Use the A. O. Smith at Lowe’s Product Selector Tool.{'\n'}Use the
          first option for every question.{'\n'}Is a tankless water heater
          suggested?
          {'\n'}
          If so, use <code>y</code>, otherwise, use <code>n</code>.
        </Text>
      </Card>

      <Card {...cardProps('c')}>
        <Text>
          One of our clients makes MDF panels out of rice straw waste.{'\n'}
          On their careers page are 2 open positions.{'\n'}What’s the first
          letter of the open maintenance position?
        </Text>
      </Card>

      <Card {...cardProps('d')}>
        <Text>
          During the 2021 LP Showcase, they released an alternate style of their
          siding.
          {'\n\n'}Was it was a color of concrete siding?If so, use{' '}
          <code>c</code>
          {'\n'}Was it a new length of wood lap siding?If so, use <code>l</code>
          {'\n'}Was it a new texture of wood panel siding? If so, use{' '}
          <code>p</code>
        </Text>
      </Card>

      <Card {...cardProps('e')}>
        <Text>
          Benson Hill Seeds carries a single variety of soybean seeds with an
          imperfect yellow hilum.{'\n'}What’s the 1<sup>st</sup> letter of its
          name?
        </Text>
      </Card>

      <Card {...cardProps('f')}>
        <Text>
          We have a new radar showing what technologies we are interested in,
          use, or think should be used with caution.{'\n'}What’s the first
          letter of the name of the second ring? (1. Adopt, 2. ?)
        </Text>
      </Card>

      <Card {...cardProps('h')}>
        <Text>
          Benson Hill has a site for farmers.{'\n'}Find the page with quotes for
          soybean futures.{'\n'}In the first paragraph, what’s the 6
          <sup>th</sup> word?
        </Text>
      </Card>

      <Card {...cardProps('i')}>
        <Text>
          Find the IP address for the Calplant (EurekaMDF) investors’ server.
          {'\n'}What's the last octet of the IP address?{'\n'}What ASCII
          character does that number represent?
        </Text>
      </Card>

      <Card {...cardProps('j')}>
        <Text>
          One of our clients sells a product with a name like mine.{'\n'}Go to
          their home page and run this script:{'\n'}
          <code>
            h=window.location.host;h[1]+String.fromCharCode(h.charCodeAt(3)-1)
          </code>
        </Text>
      </Card>
    </>
  );
}
