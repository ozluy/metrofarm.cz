// import React, { useContext } from 'react'

// import Container from 'components/Container'
// import Button from 'components/Button'
// import {
//   Div,
//   Flex,
//   Img,
//   Section,
//   H1,
//   H2,
//   Pragraph,
//   Span,
//   ListItem,
//   EndofList,
// } from 'components/Elements'
// import listSrc from '../../static/list/adopcni_listina_ovce.png'
// import listSrc2 from '../../static/list/adopcni_listina_koza.png'
// import goatSheepSrc from '../../static/fullscreen/goats-and-sheeps.png'
// import styled, { css } from 'styled-components'
// import Gallery from 'components/Gallery'
// import { navigate } from 'gatsby'
// import Seo from 'components/Seo'
// import { useIntl } from 'react-intl'

// const CustomImg = styled(Img)`
//   position: absolute;
//   right: 150px;
//   top: 250px;
// `

// const CustomFlex = styled(Flex)`
//   flex-direction: row;
//   justify-content: space-between;

//   ${({ theme }) => css`
//     @media screen and (max-width: ${theme.breakpoints.lg}) {
//       flex-direction: column-reverse;

//       img {
//         display: none;
//       }
//     }
//   `}
// `
// const AdopSheepOrGoat = () => {
//   const { formatMessage } = useIntl()
//   return (
//     <>
//       <Seo />
//       <Section>
//         <Container>
//           <Flex
//             flexDirection="column"
//             alignItems="center"
//             maxWidth="80%"
//             m=" 0 auto"
//           >
//             <H1 textAlign="center">
//               {formatMessage({ id: 'animal-banner' })}
//             </H1>
//             <Pragraph textAlign="center">
//               {formatMessage({ id: 'animal-banner-desc' })}
//             </Pragraph>

//             <Pragraph
//               cursor="pointer"
//               textDecoration="underline"
//               onClick={() =>
//                 document
//                   .getElementById('form')
//                   .scrollIntoView({ behavior: 'smooth' })
//               }
//             >
//               {formatMessage({ id: 'animal-banner-action' })}
//             </Pragraph>
//           </Flex>
//         </Container>
//       </Section>
//       <Img width="100%" src={goatSheepSrc} />
//       <Section bg="green" id="form">
//         <Container>
//           <H1 textAlign="center">{formatMessage({ id: 'animal-adoption' })}</H1>

//           <CustomFlex>
//             <Div maxWidth={{ lg: '700px', md: '500px' }}>
//               <H2>{formatMessage({ id: 'animal-adoption-how' })}</H2>
//               <ul>
//                 <ListItem>
//                   {formatMessage({ id: 'animal-adoption-how-1' })}
//                 </ListItem>
//                 <ListItem>
//                   {formatMessage({ id: 'animal-adoption-how-2' })}
//                 </ListItem>
//                 <ListItem>
//                   {formatMessage({ id: 'animal-adoption-how-3' })}
//                 </ListItem>
//                 <ListItem>
//                   {formatMessage({ id: 'animal-adoption-how-4' })}
//                 </ListItem>
//               </ul>
//               <EndofList m="40px 0 70px 0">
//                 – {formatMessage({ id: 'animal-adoption-how-5' })}
//               </EndofList>
//               <Button
//                 onClick={() =>
//                   navigate('/kontaktni-formular', { replace: true })
//                 }
//               >
//                 {formatMessage({ id: 'animal-adoption-action' })}
//               </Button>
//               <Pragraph mt="30px"></Pragraph>
//               <Button
//                 onClick={() =>
//                   navigate('/kontaktni-formular', { replace: true })
//                 }
//               >
//                 {formatMessage({ id: 'animal-adoption-action-2' })}
//               </Button>
//               <Div mt="70px">
//                 <Span>
//                   <Span ff="bold">
//                     {' '}
//                     {formatMessage({ id: 'animal-adoption-contact' })}
//                   </Span>
//                   <Div mt="20px">Tereza Janovská</Div>
//                   <Div>420 737 670 019</Div>
//                   <Div>tereza@janovsky.eu</Div>
//                   <Div mt="20px">Štěpán Říha</Div>
//                   <Div>+420 725 307 598</Div>
//                   <Div>stepan.riha@metrofarm.cz</Div>
//                 </Span>
//               </Div>
//             </Div>
//             <Img height={{ lg: 800, mg: 500 }} src={listSrc2} />
//             <CustomImg height={{ lg: 800, md: 500 }} src={listSrc} />
//           </CustomFlex>
//         </Container>
//       </Section>
//       <Gallery listName="sheepandgoat" />
//     </>
//   )
// }

// export default AdopSheepOrGoat

import React from 'react'
export default () => 'no page'
