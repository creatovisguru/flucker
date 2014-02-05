$(function() {
    $('#fluckSubmit').click( function() {
        $.ajax( '/api/fluck', {
            type: 'GET',
            dataType: "json",
            error: function( xhr, status, error ) {
                var errObj = JSON.parse( xhr.responseText );
                $('fieldset').replaceWith( '<h2>Fluck me, an error!</h2><br /><p>' + errObj.message + '</p>' );
            },
            success: function( data, status, xhr ) {
                // Cache it
                var $fieldset = $('fieldset');
                // Clear it
                $fieldset.html = '';
                // Pop it
                $fieldset.append( '<h3>' + data.task.title + '</h2>' );
                $fieldset.append( '<p style="font-weight: bold;">' + data.task.body + '</p>' );
                $ul = $('<ul>');
                $fieldset.append( $ul );
                for( var prop in data.task ) {
                    if( 'user' != prop ) {
                        $ul.append( '<li><strong>' + prop + ':</strong> ' + data.task[prop] + '</li>' );
                    }
                }
            }
        });
    });
});
