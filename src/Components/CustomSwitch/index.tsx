import { Switch } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const CustomSwitch = withStyles((theme) => ({
  root: {
    width: 39,
    height: 22,
    padding: 0,
  },
  switchBase: {
    padding: 1,
    "&$checked": {
      transform: "translateX(16px)",
      color: theme.palette.common.white,
      "& + $track": {
        backgroundColor: "#52d869",
        opacity: 1,
        border: "none",
      },
    },
  },
  thumb: {
    width: 20,
    height: 20,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[400],
    opacity: 1,
  },
  checked: {},
}))((props: any) => {
  return (
    <Switch
      classes={{
        root: props.classes.root,
        switchBase: props.classes.switchBase,
        thumb: props.classes.thumb,
        track: props.classes.track,
        checked: props.classes.checked,
      }}
      {...props}
    />
  );
});

export default CustomSwitch;
