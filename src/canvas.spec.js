import { Canvas } from './canvas'; 
describe('Create canvas', () => {
    test('Canvas should be not created if width or height is 0', () => {
        const canvas = new Canvas(0, 10);
        const canvasLength = canvas.board.length;
        console.log(canvasLength);
        expect(canvasLength).toBe(12);
    });
});