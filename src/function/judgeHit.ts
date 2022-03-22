import { Player, Rock } from "../index";

const judgeHit = (_p : Player, _r : Rock) => {
    const deltaminus = _r.width / 200;
    return [
        ((_p.right >= _r.left + deltaminus && _p.right <= _r.right - deltaminus) || (_p.left >= _r.left + deltaminus && _p.left <= _r.right - deltaminus)),
        ((_r.bottom >= _p.top && _r.bottom <= _p.bottom) || (_r.top >= _p.top && _r.top <= _p.bottom))
    ];
}
export default judgeHit;