import { LightningElement, api } from "lwc";
/**
 * Import illustrations
 * */
// Custom
import FISHING_DEALS from "./icons/Custom/fishingDeals.html";
import LAKE_MOUNTAIN from "./icons/Custom/lakeMountain.html";
import NO_EVENTS from "./icons/Custom/noEvents.html";
import NO_TASK from "./icons/Custom/noTask.html";
import SETUP from "./icons/Custom/setup.html";
// Error
import NO_ACCESS from "./icons/Error/noAccess.html";
import NO_CONNECTION from "./icons/Error/noConnection.html";
import NOT_AVAILABLE_IN_LIGHTNING from "./icons/Error/notAvailableInLightning.html";
import PAGE_NOT_AVAILABLE from "./icons/Error/pageNotAvailable.html";
import WALKTHROUGH_NOT_AVAILABLE from "./icons/Error/walkthroughNotAvailable.html";
// Informational
import GOING_CAMPING from "./icons/Informational/goingCamping.html";
import MAINTENANCE from "./icons/Informational/maintenance.html";
// Miscellaneous
import GONE_FISHING from "./icons/Miscellaneous/goneFishing.html";
import NO_ACCESS2 from "./icons/Miscellaneous/noAccess2.html";
import NO_CONTENT from "./icons/Miscellaneous/noContent.html";
import NO_PREVIEW from "./icons/Miscellaneous/noPreview.html";
import PREVIEW from "./icons/Miscellaneous/preview.html";
import RESEARCH from "./icons/Miscellaneous/research.html";
// No Data
import DESSERT from "./icons/NoData/dessert.html";
import OPEN_ROAD from "./icons/NoData/openRoad.html";

const illustrationMap = {
  FISHING_DEALS,
  LAKE_MOUNTAIN,
  NO_EVENTS,
  NO_TASK,
  SETUP,
  NO_ACCESS,
  NO_CONNECTION,
  NOT_AVAILABLE_IN_LIGHTNING,
  PAGE_NOT_AVAILABLE,
  WALKTHROUGH_NOT_AVAILABLE,
  GOING_CAMPING,
  MAINTENANCE,
  GONE_FISHING,
  NO_ACCESS2,
  NO_CONTENT,
  NO_PREVIEW,
  PREVIEW,
  RESEARCH,
  DESSERT,
  OPEN_ROAD,
};

export default class Illustration extends LightningElement {
  /**
   * The size of the illustration to render.
   * Possible values are `small` or `large`.
   * @type {string}
   * @access public
   */
  @api size;

  @api messageHeading;
  @api messageBody;
  @api illustration = "";

  get includesMessage() {
    return !!this.messageHeading || !!this.messageBody;
  }

  get illustrationStyle() {
    let classes = "slds-illustration";
    return this.size === "large"
      ? (classes += " slds-illustration_large")
      : (classes += " slds-illustration_small");
  }

  render() {
    const illustrationKey = this.illustration
      .split(" ")
      .join("_")
      .toUpperCase();
    return illustrationMap[illustrationKey] || FISHING_DEALS;
  }
}
