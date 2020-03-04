$(document).ready(function() {
  console.log("test");

  var Arow = ["A"];
  var Brow = ["B"];

  $.get("/api/proofs", display);
  function display(data) {
    console.log(data);

    for (var i = 0; i < data.length; i++) {
      var headrow = $(
        "<thead><tr>" +
          "<th>Row Name</th>" +
          "<th>1</th>" +
          "<th>2</th>" +
          "<th>3</th>" +
          "<th>4</th>" +
          "<th>5</th>" +
          "<th>6</th>" +
          "<th>7</th>" +
          "<th>8</th>" +
          "<th>9</th>" +
          "<th>10</th>" +
          "<th>11</th>" +
          "<th>12</th>" +
          "<th>13</th>" +
          "<th>14</th>" +
          "<th>15</th>" +
          "<th>16</th>" +
          "<th>17</th>" +
          "<th>18</th>" +
          "<th>19</th>" +
          "<th>20</th>" +
          "<th>21</th>" +
          "<th>22</th>" +
          "<th>23</th>" +
          "<th>24</th>" +
          "<th>25</th>" +
          "<th>26</th>" +
          "<th>27</th>" +
          "<th>28</th>" +
          "<th>29</th>" +
          "<th>30</th>" +
          "<th>31</th>" +
          "<th>32</th>" +
          "<th>33</th>" +
          "<th>34</th>" +
          "<th>35</th>" +
          "<th>36</th>" +
          "<th>37</th>" +
          "<th>38</th>" +
          "<th>39</th>" +
          "<th>40</th>" +
          "<th>41</th>" +
          "<th>42</th>" +
          "<th>43</th>" +
          "<th>44</th>" +
          "<th>45</th>" +
          "<th>46</th>" +
          "<th>47</th>" +
          "<th>48</th>" +
          "</tr></thead>"
      );

      var rowA = $("<tr>");
      rowA.attr("id", "rowA");
      var rowB = $("<tr>");
      rowB.attr("id", "rowB");

      if (data[i].locationRow === "A") {
        Arow.push(data[i].order + "-" + data[i].line);
      } else if (data[i].locationRow === "B") {
        Brow.push(data[i].order + "-" + data[i].line);
      }

    //   console.log(Arow)
    //   console.log(Brow)

      
      
    }

    console.log(Arow[0])
    for (var j = 0; j< Arow.length; j++) {
        var proofA = $("<td>")
        proofA.append(Arow[j])
        console.log(proofA)
        rowA.append(proofA)
    }
    $("#proofTarget").append(rowA);
    $("#proofTarget").prepend(headrow);
  }
});
