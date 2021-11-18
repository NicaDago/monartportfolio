import React from 'react';
import styled from 'styled-components';

function Test() {
    return (
        <TestStyled>
           
        </TestStyled>    
    )
}

const TestStyled = styled.section`
  
`;

export default Test;












// <div class="content">
//                 <div class="entries">
//                     <div class="entry">
//                         <div class="title">2011</div>
//                             <div class="trxt">
//                                 <p>Neque sunt voluptatibus repellat pariatur ut enim. Eveniet rerum suscipit eveniet amet dignissimos. Doloremque et distinctio quod molestiae ut.</p>
//                             </div>
                        
//                     </div>
//                     <div class="entry">
//                         <div class="title">2012</div>
//                             <div class="text">
//                                 <p>Quo nobis cumque dolor iure voluptatem voluptatem alias soluta.</p>
//                             </div>
                        
//                     </div>
//                 </div>
//             </div>




// margin-top: 5rem;
// height:120vh;
// .content{ 
//   &:before {
//     content: '';
//     position: fixed;
//     top:3rem;
//     left:50%;
//     bottom:3rem;
//     height: 120vh;
//     transform:translateX(-50%);
//     width:4px;
//     background-color: black;
//   }
// }
//   .entries {
//     width:calc(100% - 80px);
//     max-width:800px;
//     margin:auto;
//     position: relative;
//     left:-5px;
//     .entry {
//       width:calc(50% - 80px);
//       float:left; 
//       padding:20px;
//       clear:both;
//       text-align:right;
//       &:not(:first-child) {
//         margin-top:-60px;
//       }
//       .title {
//         font-size:32px;
//         margin-bottom:12px;
//         position: relative;
//         color:#fff;
//         &:before { 
//           content: '';
//           position: absolute;
//           width:8px;
//           height:8px;
//           border:4px solid #ffffff;
//           background-color:#1D1D1D;
//           border-radius:100%;
//           top:50%;
//           transform:translateY(-50%);
//           right:-73px;
//           z-index:1000;
//         }
//         &.big:before {
//           width:24px;
//           height:24px;
//           transform:translate(8px,-50%);
//         }
//       }
    
//       .text {
//         color:black;
//         p {
//           line-height:1.4em;
//         }
//       }

//       &:nth-child(2n) {
//         text-align:left;
//         float:right;
//         .title {
//           &:before {
//             left:-63px;
//           }
//           &.big:before {
//             transform:translate(-8px,-50%);
//           }
//         }
//       }
//     }
// }