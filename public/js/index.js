$(document).ready(function() {
  console.log("test");

  $.get("/api/proofs", display);
  // DISPLAY AND API CALL FUNCTION
  function display(data) {
    console.log(data);
    // SEARCH FOR LOCATION ////////////////////////////////////////
    ///////////////////////////////////////////////////////////////
    $("#proofSearchBtn").on("click", search);

    function search() {
      console.log("test click");
      var searchVal = $("#proofSearch")
        .val()
        .trim();
      console.log(searchVal);

      function proofSearch(nameKey, myArray) {
        for (var i = 0; i < myArray.length; i++) {
          if (myArray[i].orderLine != nameKey) {
            console.log("error");
            $("#proofSearch").val("");
            $("#searchTarget").addClass("pdanger");
            $("#searchTarget").html("This proof does not exist.");
          } else if (myArray[i].orderLine === nameKey) {
            $("#searchTarget").removeClass("pdanger");
            return myArray[i];
          }
        }
      }
      var resultObject = proofSearch(searchVal, data);
      $("#searchTarget").html(resultObject.location);
      $("#proofSearch").val("");
    }
    ///////////////////////////////////////////////////////////////
    // PROOF DELETE FUNCTION /////////////////////////////////////
    ///////////////////////////////////////////////////////////////
    $("#proofDeleteBtn").on("click", destroy);
    function destroy() {
      console.log("destroy test");
      var destroyVal = $("#proofDelete")
        .val()
        .trim();
      console.log(destroyVal);

      function proofDestroy(nameKey, myArray) {
        for (var i = 0; i < myArray.length; i++) {
          if (myArray[i].orderLine != nameKey) {
            console.log("error");
          } else if (myArray[i].orderLine === nameKey) {
            return myArray[i];
          }
        }
      }
      var resObj = proofDestroy(destroyVal, data);
      var proofId = resObj.id;
      deleteProof(proofId);
    }
    ///////////////////////////////////////////////////////////////
    // PROOF UPDATE FUNCTION //////////////////////////////////////
    ///////////////////////////////////////////////////////////////
    $("#proofUpdateBtn").on("click", pUpdate);
    function pUpdate() {
      console.log("update test")
      var updateVal = $("#proofUpdate").val().trim()
      console.log(updateVal)

      function proofUpdate(nameKey, myArray) {
        for (var i = 0; i < myArray.length; i++) {
          if (myArray[i].orderLine != nameKey) {
            console.log("error")
          } else if (myArray[i].orderLine === nameKey) {
            return myArray[i]
          }
        }
      }

      var resObject = proofUpdate(updateVal, data)
      console.log(resObject)
      var proofUpId = resObject.id
      var updateObject = {}
      updateObject.id = proofUpId;
      updateObject.location = $("#proofLocationUpdate").val().trim();
      console.log(updateObject)
      update(updateObject)
    }





  } //END DISPLAY AND API CALL FUNCTION

  function update(x) {
    $.ajax({
      method: "PUT", 
      url: "/api/proofs",
      data: x
    }).then(location.reload())
  }

  function deleteProof(id) {
    $.ajax({
      method: "DELETE",
      url: "/api/proofs/" + id
    }).then(location.reload());
  }

  function gobabygo(x) {
    $.post("/api/proofs", x);
    location.reload();
  }

  $("#proofAddBtn").on("click", function() {
    var newProofObject = {};
    var order = $("#proofAdd")
      .val()
      .trim();
    var cust = "";
    var loc = $("#proofLocationAdd")
      .val()
      .trim();
    newProofObject.orderLine = order;
    newProofObject.customer = cust;
    newProofObject.location = loc;
    console.log(newProofObject);
    gobabygo(newProofObject);
  });
});
