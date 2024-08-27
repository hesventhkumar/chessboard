import React from 'react'

const Chessboard = () => {
  return (
    <div>

        <h1><i class="fa-sharp-duotone fa-solid fa-chess-board fs-1 pt-3"></i> Chess Board</h1>

        <table class="chessboard">
            <tbody>
                
                <tr>
                    
                    <td class="light"><i class="fa-solid fa-chess-rook fs-1 p-3"  ></i></td>
                    <td class="dark"><i class="fa-solid fa-chess-knight fs-1 p-3"></i></td>
                    <td class="light"><i class="fa-solid fa-chess-bishop fs-1 p-3"></i></td>
                    <td class="dark"><i class="fa-solid fa-chess-queen fs-1 p-3"></i></td>
                    <td class="light"><i class="fa-solid fa-chess-king fs-1 p-3"></i></td>
                    <td class="dark"><i class="fa-solid fa-chess-bishop fs-1 p-3"></i></td>
                    <td class="light"><i class="fa-solid fa-chess-knight fs-1 p-3"></i></td>
                    <td class="dark"><i class="fa-solid fa-chess-rook fs-1 p-3"  ></i></td>
                </tr>
                <tr>
                
                    <td class="dark"><i class="fa-solid fa-chess-pawn fs-1 p-3"></i></td>
                    <td class="light"><i class="fa-solid fa-chess-pawn fs-1 p-3"></i></td>
                    <td class="dark"><i class="fa-solid fa-chess-pawn fs-1 p-3"></i></td>
                    <td class="light"><i class="fa-solid fa-chess-pawn fs-1 p-3"></i></td>
                    <td class="dark"><i class="fa-solid fa-chess-pawn fs-1 p-3"></i></td>
                    <td class="light"><i class="fa-solid fa-chess-pawn fs-1 p-3"></i></td>
                    <td class="dark"><i class="fa-solid fa-chess-pawn fs-1 p-3"></i></td>
                    <td class="light"><i class="fa-solid fa-chess-pawn fs-1 p-3"></i></td>
                </tr>
                <tr>
                    
                    <td class="light"></td>
                    <td class="dark"></td>
                    <td class="light"></td>
                    <td class="dark"></td>
                    <td class="light"></td>
                    <td class="dark"></td>
                    <td class="light"></td>
                    <td class="dark"></td>
                </tr>
                <tr>
                
                    <td class="dark"></td>
                    <td class="light"></td>
                    <td class="dark"></td>
                    <td class="light"></td>
                    <td class="dark"></td>
                    <td class="light"></td>
                    <td class="dark"></td>
                    <td class="light"></td>
                </tr>
                <tr>
                
                    <td class="light"></td>
                    <td class="dark"></td>
                    <td class="light"></td>
                    <td class="dark"></td>
                    <td class="light"></td>
                    <td class="dark"></td>
                    <td class="light"></td>
                    <td class="dark"></td>
                </tr>
                <tr>
                    
                    <td class="dark"></td>
                    <td class="light"></td>
                    <td class="dark"></td>
                    <td class="light"></td>
                    <td class="dark"></td>
                    <td class="light"></td>
                    <td class="dark"></td>
                    <td class="light"></td>
                </tr>
                <tr>
                
                    <td class="light"><i class="fa-regular fa-chess-pawn  fs-1 p-3"></i></td>
                    <td class="dark"><i class="fa-regular fa-chess-pawn  fs-1 p-3"></i></td>
                    <td class="light"><i class="fa-regular fa-chess-pawn  fs-1 p-3"></i></td>
                    <td class="dark"><i class="fa-regular fa-chess-pawn  fs-1 p-3"></i></td>
                    <td class="light"><i class="fa-regular fa-chess-pawn  fs-1 p-3"></i></td>
                    <td class="dark"><i class="fa-regular fa-chess-pawn  fs-1 p-3"></i></td>
                    <td class="light"><i class="fa-regular fa-chess-pawn  fs-1 p-3"></i></td>
                    <td class="dark"><i class="fa-regular fa-chess-pawn  fs-1 p-3"></i></td>
                </tr>
                <tr>
                
                    <td class="dark"> <i class="fa-regular fa-chess-rook fs-1 p-3"></i></td>
                    <td class="light"> <i class="fa-regular fa-chess-knight  fs-1 p-3"></i></td>
                    <td class="dark"><i class="fa-regular fa-chess-bishop  fs-1 p-3"></i></td>
                    <td class="light"><i class="fa-regular fa-chess-queen fs-1 p-3"></i></td>
                    <td class="dark"> <i class="fa-regular fa-chess-king fs-1 p-3"></i></td>
                    <td class="light"><i class="fa-regular fa-chess-bishop  fs-1 p-3"></i></td>
                    <td class="dark"><i class="fa-regular fa-chess-knight  fs-1 p-3"></i></td>
                    <td class="light"><i class="fa-regular fa-chess-rook fs-1 p-3"></i></td>
                </tr>
            </tbody>
        </table>
      
    </div>
  )
}

export default Chessboard
