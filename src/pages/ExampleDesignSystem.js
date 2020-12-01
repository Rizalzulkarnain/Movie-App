import React, { Component } from 'react';
import {
  DocsSection,
  DocsColorBox,
  DocsModalContainer,
  DocsCodeBlock,
} from '../styles/Docs';
import {
  Box,
  Btn,
  InputLight,
  InputDark,
  TooltipLight,
  TooltipDark,
  Tooltip,
  AlertRed,
  AlertGreen,
  Table,
  Modal,
} from '../styles';

class App extends Component {
  render() {
    return (
      <Box mt={5}>
        <DocsSection>
          <h3>Colors</h3>
          <DocsColorBox color="blue"> blue </DocsColorBox>
          <DocsColorBox color="purple"> purple </DocsColorBox>
          <DocsColorBox color="red"> red </DocsColorBox>
          <DocsColorBox color="yellow"> yellow </DocsColorBox>
          <DocsColorBox color="green"> green </DocsColorBox>
          <DocsColorBox color="white"> white </DocsColorBox>
          <DocsColorBox color="gray1"> gray1 </DocsColorBox>
          <DocsColorBox color="gray2"> gray2 </DocsColorBox>
          <DocsColorBox color="gray3"> gray3 </DocsColorBox>
          <DocsColorBox color="black"> black </DocsColorBox>
        </DocsSection>

        <DocsSection>
          <h3>Button Styles</h3>
          <Btn as="a" href="https://react.design">
            {' '}
            Submit{' '}
          </Btn>
          <Btn color="red"> Submit </Btn>
          <Btn color="green"> Submit </Btn>

          <Tooltip activate="click" label="Thanks for clicking!">
            <Btn color="gray2"> Submit </Btn>
          </Tooltip>

          <DocsCodeBlock>
            {`<Btn> ... </Btn>
            <Btn color="red"> ... </Btn>
            <Btn color="green"> ...  </Btn>
            <Btn color="gray2"> ...  </Btn>
            `}
          </DocsCodeBlock>
        </DocsSection>

        <DocsSection>
          <h3>Button Sizes</h3>

          <Btn size="sm">Submit</Btn>
          <Btn>Submit</Btn>
          <Btn size="lg">Submit</Btn>

          <DocsCodeBlock>
            {`<Btn size="sm"> ... </Btn>
              <Btn>...</Btn>
              <Btn size="lg"> ... </Btn>
            `}
          </DocsCodeBlock>
        </DocsSection>

        <DocsSection>
          <h3>Input</h3>
          <InputLight placeholder="Light Input" />
          <InputDark placeholder="Dark Input" />

          <DocsCodeBlock>
            {`<InputLight placeholder="..." />
            <InputDark placeholder="..." />
            `}
          </DocsCodeBlock>
        </DocsSection>

        <DocsSection>
          <TooltipLight> Light Tooltip </TooltipLight>
          <TooltipDark> Dark Tooltip </TooltipDark>

          <DocsCodeBlock>
            {`<TooltipLight> ... </TooltipLight>
            <TooltipDark> ... Tooltip </TooltipDark>
            `}
          </DocsCodeBlock>
        </DocsSection>

        <DocsSection>
          <h3>Modal</h3>
          <DocsModalContainer>
            <Modal header="Header">Modal Body</Modal>
          </DocsModalContainer>
          <DocsCodeBlock>
            {` // Modal without Overlay
              <Modal header="..."> ... </Modal>

              // Modal with Overlay
              <ModalWithOverlay header="..."> ... </ModalWithOverlay>
            `}
          </DocsCodeBlock>
        </DocsSection>

        <DocsSection>
          <h3>Table</h3>
          <Table>
            <thead>
              <tr>
                <th>Header</th>
                <th>Header</th>
                <th>Header</th>
                <th>Header</th>
              </tr>
            </thead>
            <tbody>
              {Array(4)
                .fill('')
                .map((d, i) => {
                  return (
                    <tr key={i}>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                      <td>Cell</td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>

          <DocsCodeBlock>
            {`<Table> ... </Table>
            `}
          </DocsCodeBlock>
        </DocsSection>

        <DocsSection>
          <h3>Alerts</h3>
          <AlertRed> Warning </AlertRed>
          <AlertGreen> Success </AlertGreen>

          <DocsCodeBlock>
            {`<AlertRed> ... </AlertRed>
            <AlertGreen> ... </AlertGreen>
            `}
          </DocsCodeBlock>
        </DocsSection>
      </Box>
    );
  }
}

export default App;
