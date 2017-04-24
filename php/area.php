<?php
  $result = array();

  if ($_POST["figure"]) {
    $area = 0;
    switch ($_POST["figure"]) {
      case "square":
        if ($_POST["side"]) {
          $result = array('area' => ($_POST["side"] * $_POST["side"]));
        } else {
          $result = array('error' => 'bad figure request');
        }
        break;

      case "circle":
        if ($_POST["radius"]) {
          $result = array('area' => ($_POST["radius"] * $_POST["radius"] * 3.1416));
        } else {
          $result = array('error' => 'bad figure request');
        }
        break;

      case "triangle":
        if ($_POST["base"] && $_POST["height"]) {
          $result = array('area' => ($_POST["base"] * $_POST["height"] * 0.5));
        } else {
          $result = array('error' => 'bad figure request');
        }
        break;

      default:
        $result = array('error' => 'bad figure request');
        break;
    }
  } else {
    $result = array('error' => 'bad figure request');
  }

  echo json_encode($result);
?>
