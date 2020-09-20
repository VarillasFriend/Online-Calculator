// if height != 0 and edge1 != 0 and edge2 != 0:
//         base = edge1 ** 2
//         diagonalext = (height ** 2 + edge1 ** 2) ** 0.5
//         area = base + edge1 * diagonalext * 2
//         volume = base * height / 3
//     elif height != 0 and edge2 != 0 and base != 0:
//         edge1 = base ** 0.5
//         diagonalext = (height ** 2 + edge1 ** 2) ** 0.5
//         area = base + edge1 * diagonalext * 2
//         volume = base * height / 3
//     elif volume != 0 and edge1 != 0 and edge2 != 0:
//         height = volume * 3 / (edge1 ** 2)
//         base = edge1 ** 2
//         diagonalext = (height ** 2 + edge1 ** 2) ** 0.5
//         area = base + edge1 * diagonalext * 2
//     elif volume != 0 and height != 0 and edge2 != 0:
//         edge1 = (volume * 3 / height) ** 0.5
//         base = edge1 ** 2
//         diagonalext = (height ** 2 + edge1 ** 2) ** 0.5
//         area = base + edge1 * diagonalext * 2
//     else:
//         print('Unable to realize operation with given data')
//     print(' ')
//     print('Height: ' + str(round(height, r)))
//     print('Base edge: ' + str(round(edge1, r)))
//     print('Height edge: ' + str(round(edge2, r)))
//     print('Base: ' + str(round(base, r)))
//     print('Area: ' + str(round(area, r)))
//     print('Volume: ' + str(round(volume, r)))