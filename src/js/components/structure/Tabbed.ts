/**
 * Tabbed  
 * Relateively easy tabbed content, powered by CSS
 */
export class Tabbed {

    private config: TabbedConfig;

    constructor(config: TabbedConfig) {
        this.config = config;
    }

    public create() {

        let $container = $("<div>");
        let $tabList = $("<ul>").appendTo($container);

        this.config.content.forEach(function (entry, index) {
            let $tab = $("<a>")
                .attr("href", "#fragment-" + index)
                .html(entry.name);
            $("<li>").appendTo($tabList).append($tab);

            $("<div>")
                .attr("id", "fragment-" + index)
                .append(entry.page)
                .appendTo($container);
        });

        $container.tabs({
            //        heightStyle: "auto",
        });

        return $container;
    }

}

interface TabbedConfig {
    name: string,
    content: TabContent[],
}

export interface TabContent {
    /** Tab name. If there is only one tab, does nothing. */
    name: string,
    /** JQuery element with the modal contents */
    page: JQuery<HTMLElement>,
    /** If true, strips the top margins so that a Tabbed object could be fitted in it */
    tabbable?: boolean,
}