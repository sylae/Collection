
window.projectVersion = 'v0.3.0';

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:CharlotteDunois" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="CharlotteDunois.html">CharlotteDunois</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:CharlotteDunois_Collect" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="CharlotteDunois/Collect.html">Collect</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:CharlotteDunois_Collect_Collection" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="CharlotteDunois/Collect/Collection.html">Collection</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "CharlotteDunois.html", "name": "CharlotteDunois", "doc": "Namespace CharlotteDunois"},{"type": "Namespace", "link": "CharlotteDunois/Collect.html", "name": "CharlotteDunois\\Collect", "doc": "Namespace CharlotteDunois\\Collect"},
            
            {"type": "Class", "fromName": "CharlotteDunois\\Collect", "fromLink": "CharlotteDunois/Collect.html", "link": "CharlotteDunois/Collect/Collection.html", "name": "CharlotteDunois\\Collect\\Collection", "doc": "&quot;Collection, an util to conventionally store a key-value pair.&quot;"},
                                                        {"type": "Method", "fromName": "CharlotteDunois\\Collect\\Collection", "fromLink": "CharlotteDunois/Collect/Collection.html", "link": "CharlotteDunois/Collect/Collection.html#method___construct", "name": "CharlotteDunois\\Collect\\Collection::__construct", "doc": "&quot;I think you are supposed to know what this does.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Collect\\Collection", "fromLink": "CharlotteDunois/Collect/Collection.html", "link": "CharlotteDunois/Collect/Collection.html#method___debugInfo", "name": "CharlotteDunois\\Collect\\Collection::__debugInfo", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Collect\\Collection", "fromLink": "CharlotteDunois/Collect/Collection.html", "link": "CharlotteDunois/Collect/Collection.html#method_current", "name": "CharlotteDunois\\Collect\\Collection::current", "doc": "&quot;Returns the current element.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Collect\\Collection", "fromLink": "CharlotteDunois/Collect/Collection.html", "link": "CharlotteDunois/Collect/Collection.html#method_key", "name": "CharlotteDunois\\Collect\\Collection::key", "doc": "&quot;Fetch the key from the current element.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Collect\\Collection", "fromLink": "CharlotteDunois/Collect/Collection.html", "link": "CharlotteDunois/Collect/Collection.html#method_next", "name": "CharlotteDunois\\Collect\\Collection::next", "doc": "&quot;Advances the internal pointer.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Collect\\Collection", "fromLink": "CharlotteDunois/Collect/Collection.html", "link": "CharlotteDunois/Collect/Collection.html#method_rewind", "name": "CharlotteDunois\\Collect\\Collection::rewind", "doc": "&quot;Resets the internal pointer.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Collect\\Collection", "fromLink": "CharlotteDunois/Collect/Collection.html", "link": "CharlotteDunois/Collect/Collection.html#method_valid", "name": "CharlotteDunois\\Collect\\Collection::valid", "doc": "&quot;Checks if current position is valid.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Collect\\Collection", "fromLink": "CharlotteDunois/Collect/Collection.html", "link": "CharlotteDunois/Collect/Collection.html#method_delete", "name": "CharlotteDunois\\Collect\\Collection::delete", "doc": "&quot;Removes an item from the collection by its key.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Collect\\Collection", "fromLink": "CharlotteDunois/Collect/Collection.html", "link": "CharlotteDunois/Collect/Collection.html#method_clear", "name": "CharlotteDunois\\Collect\\Collection::clear", "doc": "&quot;Clears the Collection.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Collect\\Collection", "fromLink": "CharlotteDunois/Collect/Collection.html", "link": "CharlotteDunois/Collect/Collection.html#method_chunk", "name": "CharlotteDunois\\Collect\\Collection::chunk", "doc": "&quot;Breaks the collection into multiple, smaller chunks of a given size. Returns a new Collection.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Collect\\Collection", "fromLink": "CharlotteDunois/Collect/Collection.html", "link": "CharlotteDunois/Collect/Collection.html#method_count", "name": "CharlotteDunois\\Collect\\Collection::count", "doc": "&quot;Returns the total number of items in the collection.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Collect\\Collection", "fromLink": "CharlotteDunois/Collect/Collection.html", "link": "CharlotteDunois/Collect/Collection.html#method_copy", "name": "CharlotteDunois\\Collect\\Collection::copy", "doc": "&quot;Returns a copy of itself.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Collect\\Collection", "fromLink": "CharlotteDunois/Collect/Collection.html", "link": "CharlotteDunois/Collect/Collection.html#method_diff", "name": "CharlotteDunois\\Collect\\Collection::diff", "doc": "&quot;Compares the collection against another collection or a plain PHP array based on its value. Returns a new Collection.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Collect\\Collection", "fromLink": "CharlotteDunois/Collect/Collection.html", "link": "CharlotteDunois/Collect/Collection.html#method_all", "name": "CharlotteDunois\\Collect\\Collection::all", "doc": "&quot;Returns all items.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Collect\\Collection", "fromLink": "CharlotteDunois/Collect/Collection.html", "link": "CharlotteDunois/Collect/Collection.html#method_diffKeys", "name": "CharlotteDunois\\Collect\\Collection::diffKeys", "doc": "&quot;Compares the collection against another collection or a plain PHP array based on its key. Returns a new Collection.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Collect\\Collection", "fromLink": "CharlotteDunois/Collect/Collection.html", "link": "CharlotteDunois/Collect/Collection.html#method_each", "name": "CharlotteDunois\\Collect\\Collection::each", "doc": "&quot;Iterates over the items in the collection and passes each item to a given callback. Returning &lt;code&gt;false&lt;\/code&gt; in the callback will stop the processing.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Collect\\Collection", "fromLink": "CharlotteDunois/Collect/Collection.html", "link": "CharlotteDunois/Collect/Collection.html#method_every", "name": "CharlotteDunois\\Collect\\Collection::every", "doc": "&quot;Returns true if all elements pass the given truth test.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Collect\\Collection", "fromLink": "CharlotteDunois/Collect/Collection.html", "link": "CharlotteDunois/Collect/Collection.html#method_except", "name": "CharlotteDunois\\Collect\\Collection::except", "doc": "&quot;Returns all items in the collection except for those with the specified keys. Returns a new Collection.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Collect\\Collection", "fromLink": "CharlotteDunois/Collect/Collection.html", "link": "CharlotteDunois/Collect/Collection.html#method_first", "name": "CharlotteDunois\\Collect\\Collection::first", "doc": "&quot;Returns the first element in the collection that passes a given truth test.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Collect\\Collection", "fromLink": "CharlotteDunois/Collect/Collection.html", "link": "CharlotteDunois/Collect/Collection.html#method_flatten", "name": "CharlotteDunois\\Collect\\Collection::flatten", "doc": "&quot;Flattens a multi-dimensional collection into a single dimension. Returns a new Collection.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Collect\\Collection", "fromLink": "CharlotteDunois/Collect/Collection.html", "link": "CharlotteDunois/Collect/Collection.html#method_flattenDo", "name": "CharlotteDunois\\Collect\\Collection::flattenDo", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Collect\\Collection", "fromLink": "CharlotteDunois/Collect/Collection.html", "link": "CharlotteDunois/Collect/Collection.html#method_get", "name": "CharlotteDunois\\Collect\\Collection::get", "doc": "&quot;Returns the item for a given key. If the key does not exist, null is returned.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Collect\\Collection", "fromLink": "CharlotteDunois/Collect/Collection.html", "link": "CharlotteDunois/Collect/Collection.html#method_groupBy", "name": "CharlotteDunois\\Collect\\Collection::groupBy", "doc": "&quot;Groups the collection&#039;s items by a given key. Returns a new Collection.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Collect\\Collection", "fromLink": "CharlotteDunois/Collect/Collection.html", "link": "CharlotteDunois/Collect/Collection.html#method_has", "name": "CharlotteDunois\\Collect\\Collection::has", "doc": "&quot;Determines if a given key exists in the collection.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Collect\\Collection", "fromLink": "CharlotteDunois/Collect/Collection.html", "link": "CharlotteDunois/Collect/Collection.html#method_implode", "name": "CharlotteDunois\\Collect\\Collection::implode", "doc": "&quot;Joins the items in a collection. Its arguments depend on the type of items in the collection.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Collect\\Collection", "fromLink": "CharlotteDunois/Collect/Collection.html", "link": "CharlotteDunois/Collect/Collection.html#method_indexOf", "name": "CharlotteDunois\\Collect\\Collection::indexOf", "doc": "&quot;Returns the position of the given value in the collection. Returns null if the given value couldn&#039;t be found.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Collect\\Collection", "fromLink": "CharlotteDunois/Collect/Collection.html", "link": "CharlotteDunois/Collect/Collection.html#method_intersect", "name": "CharlotteDunois\\Collect\\Collection::intersect", "doc": "&quot;Removes any values that are not present in the given array or collection. Returns a new Collection.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Collect\\Collection", "fromLink": "CharlotteDunois/Collect/Collection.html", "link": "CharlotteDunois/Collect/Collection.html#method_keys", "name": "CharlotteDunois\\Collect\\Collection::keys", "doc": "&quot;Returns all of the collection&#039;s keys. Returns a new Collection.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Collect\\Collection", "fromLink": "CharlotteDunois/Collect/Collection.html", "link": "CharlotteDunois/Collect/Collection.html#method_last", "name": "CharlotteDunois\\Collect\\Collection::last", "doc": "&quot;Returns the last element in the collection that passes a given truth test.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Collect\\Collection", "fromLink": "CharlotteDunois/Collect/Collection.html", "link": "CharlotteDunois/Collect/Collection.html#method_map", "name": "CharlotteDunois\\Collect\\Collection::map", "doc": "&quot;Iterates through the collection and passes each value to the given callback. The callback is free to modify the item and return it, thus forming a new collection of modified items.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Collect\\Collection", "fromLink": "CharlotteDunois/Collect/Collection.html", "link": "CharlotteDunois/Collect/Collection.html#method_max", "name": "CharlotteDunois\\Collect\\Collection::max", "doc": "&quot;Return the maximum value of a given key.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Collect\\Collection", "fromLink": "CharlotteDunois/Collect/Collection.html", "link": "CharlotteDunois/Collect/Collection.html#method_min", "name": "CharlotteDunois\\Collect\\Collection::min", "doc": "&quot;Return the minimum value of a given key.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Collect\\Collection", "fromLink": "CharlotteDunois/Collect/Collection.html", "link": "CharlotteDunois/Collect/Collection.html#method_merge", "name": "CharlotteDunois\\Collect\\Collection::merge", "doc": "&quot;Merges the given collection into this collection, resulting in a new collection.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Collect\\Collection", "fromLink": "CharlotteDunois/Collect/Collection.html", "link": "CharlotteDunois/Collect/Collection.html#method_nth", "name": "CharlotteDunois\\Collect\\Collection::nth", "doc": "&quot;Creates a new collection consisting of every n-th element.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Collect\\Collection", "fromLink": "CharlotteDunois/Collect/Collection.html", "link": "CharlotteDunois/Collect/Collection.html#method_only", "name": "CharlotteDunois\\Collect\\Collection::only", "doc": "&quot;Returns the items in the collection with the specified keys. Returns a new Collection.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Collect\\Collection", "fromLink": "CharlotteDunois/Collect/Collection.html", "link": "CharlotteDunois/Collect/Collection.html#method_partition", "name": "CharlotteDunois\\Collect\\Collection::partition", "doc": "&quot;Partitions the collection into two collections where the first collection contains the items that passed and the second contains the items that failed.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Collect\\Collection", "fromLink": "CharlotteDunois/Collect/Collection.html", "link": "CharlotteDunois/Collect/Collection.html#method_set", "name": "CharlotteDunois\\Collect\\Collection::set", "doc": "&quot;Sets a key-value pair.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Collect\\Collection", "fromLink": "CharlotteDunois/Collect/Collection.html", "link": "CharlotteDunois/Collect/Collection.html#method_pluck", "name": "CharlotteDunois\\Collect\\Collection::pluck", "doc": "&quot;Return the values from a single column in the input array. Returns a new Collection.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Collect\\Collection", "fromLink": "CharlotteDunois/Collect/Collection.html", "link": "CharlotteDunois/Collect/Collection.html#method_random", "name": "CharlotteDunois\\Collect\\Collection::random", "doc": "&quot;Returns one random item, or multiple random items inside a Collection, from the Collection. Returns a new Collection.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Collect\\Collection", "fromLink": "CharlotteDunois/Collect/Collection.html", "link": "CharlotteDunois/Collect/Collection.html#method_reduce", "name": "CharlotteDunois\\Collect\\Collection::reduce", "doc": "&quot;Reduces the collection to a single value, passing the result of each iteration into the subsequent iteration.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Collect\\Collection", "fromLink": "CharlotteDunois/Collect/Collection.html", "link": "CharlotteDunois/Collect/Collection.html#method_reverse", "name": "CharlotteDunois\\Collect\\Collection::reverse", "doc": "&quot;Reverses the order of the collection&#039;s items. Returns a new Collection.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Collect\\Collection", "fromLink": "CharlotteDunois/Collect/Collection.html", "link": "CharlotteDunois/Collect/Collection.html#method_search", "name": "CharlotteDunois\\Collect\\Collection::search", "doc": "&quot;Searches the collection for the given value and returns its key if found. If the item is not found, false is returned.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Collect\\Collection", "fromLink": "CharlotteDunois/Collect/Collection.html", "link": "CharlotteDunois/Collect/Collection.html#method_shuffle", "name": "CharlotteDunois\\Collect\\Collection::shuffle", "doc": "&quot;Randomly shuffles the items in the collection. Returns a new Collection.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Collect\\Collection", "fromLink": "CharlotteDunois/Collect/Collection.html", "link": "CharlotteDunois/Collect/Collection.html#method_slice", "name": "CharlotteDunois\\Collect\\Collection::slice", "doc": "&quot;Returns a slice of the collection starting at the given index. Returns a new Collection.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Collect\\Collection", "fromLink": "CharlotteDunois/Collect/Collection.html", "link": "CharlotteDunois/Collect/Collection.html#method_some", "name": "CharlotteDunois\\Collect\\Collection::some", "doc": "&quot;Returns true if at least one element passes the given truth test.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Collect\\Collection", "fromLink": "CharlotteDunois/Collect/Collection.html", "link": "CharlotteDunois/Collect/Collection.html#method_sort", "name": "CharlotteDunois\\Collect\\Collection::sort", "doc": "&quot;Sorts the collection, using sort behaviour flags. Returns a new Collection.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Collect\\Collection", "fromLink": "CharlotteDunois/Collect/Collection.html", "link": "CharlotteDunois/Collect/Collection.html#method_sortKey", "name": "CharlotteDunois\\Collect\\Collection::sortKey", "doc": "&quot;Sorts the collection by key, using sort behaviour flags. Returns a new Collection.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Collect\\Collection", "fromLink": "CharlotteDunois/Collect/Collection.html", "link": "CharlotteDunois/Collect/Collection.html#method_sortCustom", "name": "CharlotteDunois\\Collect\\Collection::sortCustom", "doc": "&quot;Sorts the collection using a custom sorting function. Returns a new Collection.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Collect\\Collection", "fromLink": "CharlotteDunois/Collect/Collection.html", "link": "CharlotteDunois/Collect/Collection.html#method_sortCustomKey", "name": "CharlotteDunois\\Collect\\Collection::sortCustomKey", "doc": "&quot;Sorts the collection by key using a custom sorting function. Returns a new Collection.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Collect\\Collection", "fromLink": "CharlotteDunois/Collect/Collection.html", "link": "CharlotteDunois/Collect/Collection.html#method_unique", "name": "CharlotteDunois\\Collect\\Collection::unique", "doc": "&quot;Returns all of the unique items in the collection. Returns a new Collection.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Collect\\Collection", "fromLink": "CharlotteDunois/Collect/Collection.html", "link": "CharlotteDunois/Collect/Collection.html#method_filter", "name": "CharlotteDunois\\Collect\\Collection::filter", "doc": "&quot;Filters the collection by a given callback, keeping only those items that pass a given truth test. Returns a new Collection.&quot;"},
                    {"type": "Method", "fromName": "CharlotteDunois\\Collect\\Collection", "fromLink": "CharlotteDunois/Collect/Collection.html", "link": "CharlotteDunois/Collect/Collection.html#method_values", "name": "CharlotteDunois\\Collect\\Collection::values", "doc": "&quot;Returns a new collection with the keys reset to consecutive integers.&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


