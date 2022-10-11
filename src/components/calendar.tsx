import Typography from '@mui/material/Typography';
import Competition from './competition';

function calandar() {
  return (
    <div>
      <Typography variant="h6" component="div">
        近期比赛
      </Typography>
      <br />
      <Competition
        title="ICPC 沈阳站"
        type="ICPC 区域赛"
        time="2022.11.5-6"
        school="东北大学"
      ></Competition>
      <Competition
        title="ICPC 西安站"
        type="ICPC 区域赛"
        time="2022.11.5-6"
        school="西北工业大学"
      ></Competition>
      <Competition
        title="ICPC 合肥站"
        type="ICPC 区域赛"
        time="2022.11.5-6"
        school="中国科学技术大学"
      ></Competition>
      <Competition
        title="ICPC 济南站"
        type="ICPC 区域赛"
        time="2022.11.5-6"
        school="齐鲁工业大学"
      ></Competition>
      <Competition
        title="ICPC 杭州站"
        type="ICPC 区域赛"
        time="2022.11.5-6"
        school="杭州师范大学"
      ></Competition>
      <Competition
        title="ICPC 南京站"
        type="ICPC 区域赛"
        time="2022.11.5-6"
        school="南京航空航天大学"
      ></Competition>
      <Competition
        title="ICPC 香港站"
        type="ICPC 区域赛"
        time="	2023.01.14-15	"
        school="未知"
      ></Competition>
      <Competition
        title="ICPC 上海站"
        type="ICPC EC Final"
        time="2023.02.11-12"
        school="上海大学"
      ></Competition>
    </div>
  );
}

export default calandar;
