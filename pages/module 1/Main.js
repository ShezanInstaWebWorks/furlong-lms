import * as React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import pic from "../../public/Furlong Painting Logo.png";
import SaveIcon from "@material-ui/icons/Save";
import Quiz from "./Quiz";
import SideBar from "./SideBar";
import HistoryPage from "./HistoryPage";
import EngagementConditions from "./EngagementConditions";
import DutyOfCare from "./DutyOfCare";
import CodeOfConduct from "./CodeOfConduct";
import SuitabilityForWork from "./SuitabilityForWork";
import FatigueManagement from "./FatigueManagement";
import Bullying from "./Bullying";
import Incident from "./Incident";
import OnSiteWork from "../module 2/OnSiteWork";
import ConfinedSpace from "../module 2/ConfinedSpace";
import Electrical from "../module 2/Electrical";
import HouseKeeping from "../module 2/HouseKeeping";
import ManualHandling from "../module 2/ManualHandling";
import ProtectiveEquipment from "../module 2/ProtectiveEquipment";
import SafeWork from "../module 2/SafeWork";
import StopWork from "../module 2/StopWork";
import WorkingHeight from "../module 2/WorkingHeight";
import Quiz2 from "../module 2/Quiz2";
import Asbestos from "../module 3/Asbestos";
import DangerousGoods from "../module 3/DangerousGoods";
import Lead from "../module 3/Lead";
import Quiz3 from "../module 3/Quiz3";
import EnvironmentObj from "../module 4/EnvironmentObj";
import WasteManagement from "../module 4/WasteManagement";
import Quiz4 from "../module 4/Quiz4";
import DriverSafety from "../module 2/DriverSafety";
import {
  AppBar,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  Hidden,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";


const drawerWidth = 280;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("xs")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function Main(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [history, setHistory] = React.useState(false);
  const [engage, setEngage] = React.useState(false);
  const [duty, setDuty] = React.useState(true);
  const [conduct, setConduct] = React.useState(true);
  const [work, setWork] = React.useState(true);
  const [fatigue, setFatigue] = React.useState(true);
  const [bully, setBully] = React.useState(true);
  const [incident, setIncident] = React.useState(true);
  const [quiz, setQuiz] = React.useState(true);

  const [onSite, setonSite] = React.useState(true);
  const [driverSafety, setDriverSafety] = React.useState(true);
  const [space, setSpace] = React.useState(true);
  const [electrical, setElectrical] = React.useState(true);
  const [houseKeep, setHouseKeep] = React.useState(true);
  const [manual, setManual] = React.useState(true);
  const [protective, setProtective] = React.useState(true);
  const [safeWork, setSafeWork] = React.useState(true);
  const [stopWork, setStopWork] = React.useState(true);
  const [workHeight, setWorkHeight] = React.useState(true);
  const [quiz2, setQuiz2] = React.useState(true);

  const [asbestos, setAsbestos] = React.useState(true);
  const [dangerousGoods, setDangerousGoods] = React.useState(true);
  const [lead, setLead] = React.useState(true);
  const [quiz3, setQuiz3] = React.useState(true);

  const [environment, setEnvironment] = React.useState(true);
  const [waste, setWaste] = React.useState(true);
  const [quiz4, setQuiz4] = React.useState(true);

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={classes.appBar}
        style={{ backgroundColor: "white", height: "63.5px" }}
      >
        <div style={{ display: "flex", paddingTop: "10px" }}>
          <div style={{ width: "60%" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
             
            </IconButton>
            <Typography
              style={{
                fontSize: "15px",
                color: "black",
                fontWeight: "bold",
                marginLeft: "20px",
                paddingLeft: "20px",
              }}
              className={classes.title}
            >
              Furlong Painting Contractor Induction Program
            </Typography>
          </div>
          <div style={{ textAlign: "right", width: "30%" }}>
            <Button
              style={{
                backgroundColor: "#106786",
                color: "white",
                textAlign: "right",
              }}
            >
              {" "}
              <SaveIcon />
              SAVE
            </Button>
          </div>
        </div>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden xsDown implementation="css">
          <Drawer
            container={container}
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <div>
              <Image src={pic} height={"59"} alt="" />
            </div>

            {/* <Toolbar /> */}

            <Divider />
            <SideBar
              history={history}
              setHistory={setHistory}
              setEngage={setEngage}
              setQuiz={setQuiz}
              setDuty={setDuty}
              setConduct={setConduct}
              setWork={setWork}
              setFatigue={setFatigue}
              setBully={setBully}
              setIncident={setIncident}
              setonSite={setonSite}
              setDriverSafety={setDriverSafety}
              setSpace={setSpace}
              setElectrical={setElectrical}
              setHouseKeep={setHouseKeep}
              setManual={setManual}
              setProtective={setProtective}
              setSafeWork={setSafeWork}
              setStopWork={setStopWork}
              setWorkHeight={setWorkHeight}
              setQuiz2={setQuiz2}
              setAsbestos={setAsbestos}
              setDangerousGoods={setDangerousGoods}
              setLead={setLead}
              setQuiz3={setQuiz3}
              setEnvironment={setEnvironment}
              setWaste={setWaste}
              setQuiz4={setQuiz4}
            />
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {history && <HistoryPage />}
        {engage && <EngagementConditions />}
        {duty && <DutyOfCare />}
        {conduct && <CodeOfConduct />}
        {work && <SuitabilityForWork />}
        {fatigue && <FatigueManagement />}
        {bully && <Bullying />}
        {incident && <Incident />}
        {quiz && <Quiz />}

        {onSite && <OnSiteWork />}
        {driverSafety && <DriverSafety />}
        {space && <ConfinedSpace />}
        {electrical && <Electrical />}
        {houseKeep && <HouseKeeping />}
        {manual && <ManualHandling />}
        {protective && <ProtectiveEquipment />}
        {safeWork && <SafeWork />}
        {stopWork && <StopWork />}
        {workHeight && <WorkingHeight />}
        {quiz2 && <Quiz2 />}

        {asbestos && <Asbestos />}
        {dangerousGoods && <DangerousGoods />}
        {lead && <Lead />}
        {quiz3 && <Quiz3 />}

        {environment && <EnvironmentObj />}
        {waste && <WasteManagement />}
        {quiz4 && <Quiz4 />}
      </main>
    </div>
  );
}
Main.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
