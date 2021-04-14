 //  $(function(){
         //  let table = [];
         //  table.push('<ul>');
         //  table.push('<li>Apple</li>');
         //  table.push('<li>Banana</li>');
         //  table.push('<li>Cherry</li>');
         //  table.push('</ul>');
         //  let tag =table.join('');
         //  console.log(tag);
         //  $('body').html(tag);
         //  });
         $(document).ready(function () {
            $ajax({
                url: '../MOCK_DATA.json',
                success: function (data) {
                    //  let table = $('<table border="1" />');
                    // console.log(data);
                    let table = [];
                    table.push('<table border="1" />');

                    for (let i = 0; i < data.length; i++) {//row단위

                        table.push('<tr>');
                        for (field in data[i]) {//field단위
                            table.push('<td>' + data[i][field] + '</td>');

                        }
                       //  table.push('<li>' + dat + '</li>');
                       //  ulTag.append(liTag);
                       table.push('</tr>');
                    }
                    table.push('</table>');
                    let tag = table.join('');
                    $('body').append(ulTag);
                }
            });
        });