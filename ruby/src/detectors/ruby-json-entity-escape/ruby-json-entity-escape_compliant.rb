# Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
# SPDX-License-Identifier: MIT-0

# {fact rule=ruby-json-entity-escape@v1.0 defects=0}
def compliant
    # Compliant: HTML entity escaping has been explicitly enabled.
    ActiveSupport.escape_html_entities_in_json = true
end
# {/fact}
