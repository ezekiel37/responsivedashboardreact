import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './ProductService';

import { Button } from 'primereact/button';
import { Ripple } from 'primereact/ripple';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';

const Tablewidget = () => {
    const [employees, setEmployees] = useState([]);
    const [first1, setFirst1] = useState(0);
    const [rows1, setRows1] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageInputTooltip, setPageInputTooltip] = useState('Press \'Enter\' key to go to this page.');

    const productService = new ProductService();

    const onCustomPage1 = (event) => {
        setFirst1(event.first);
        setRows1(event.rows);
        setCurrentPage(event.page + 1);
    }

    const onPageInputKeyDown = (event, options) => {
        if (event.key === 'Enter') {
            const page = parseInt(currentPage);
            if (page < 1 || page > options.totalPages) {
                setPageInputTooltip(`Value must be between 1 and ${options.totalPages}.`);
            }
            else {
                const first = currentPage ? options.rows * (page - 1) : 0;

                setFirst1(first);
                setPageInputTooltip('Press \'Enter\' key to go to this page.');
            }
        }
    }

    const onPageInputChange = (event) => {
        setCurrentPage(event.target.value);
    }

    useEffect(() => {
        productService.getProducts().then(data => setEmployees(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

  
//template
const template1 = {
    layout: 'PrevPageLink PageLinks NextPageLink RowsPerPageDropdown CurrentPageReport',
    'PrevPageLink': (options) => {
        return (
            <button type="button" className={options.className} onClick={options.onClick} disabled={options.disabled}>
                <span className="p-3">Previous</span>
                <Ripple />
            </button>
        )
    },
    'NextPageLink': (options) => {
        return (
            <button type="button" className={options.className} onClick={options.onClick} disabled={options.disabled}>
                <span className="p-3">Next</span>
                <Ripple />
            </button>
        )
    },
    'PageLinks': (options) => {
        if ((options.view.startPage === options.page && options.view.startPage !== 0) || (options.view.endPage === options.page && options.page + 1 !== options.totalPages)) {
            const className = classNames(options.className, { 'p-disabled': true });

            return <span className={className} style={{ userSelect: 'none' }}>...</span>;
        }

        return (
            <button type="button" className={options.className} onClick={options.onClick}>
                {options.page + 1}
                <Ripple />
            </button>
        )
    },
    'RowsPerPageDropdown': (options) => {
        const dropdownOptions = [
            { label: 10, value: 10 },
            { label: 20, value: 20 },
            { label: 50, value: 50 },
            { label: 'All', value: options.totalRecords }
        ];

        return <Dropdown value={options.value} options={dropdownOptions} onChange={options.onChange} />;
    },
    'CurrentPageReport': (options) => {
        return (
            <span className="mx-3" style={{ color: 'var(--text-color)', userSelect: 'none' }}>
                Go to <InputText size="2" className="ml-1" value={currentPage} tooltip={pageInputTooltip}
                    onKeyDown={(e) => onPageInputKeyDown(e, options)} onChange={onPageInputChange}/>
            </span>
        )
    }
};


    return (
        <div>
            <div className="card">
                <DataTable value={employees} paginator paginatorTemplate={template1} first={first1} rows={rows1} onPage={onCustomPage1} responsiveLayout="scroll">
                    <Column field="code" header="STAFF ID"></Column>
                    <Column field="name" header="NAME"></Column>
                    <Column field="category" header="MIS CODE"></Column>
                    <Column field="price" header="VENDOR"></Column>
                    <Column field="price" header="SEGMENT"></Column>
                    <Column field="date" header="DATE OF RESUMPTION"></Column>
                    <Column field="price" header="NEW ASM STRUCTURE"></Column>
                   
                </DataTable>
            </div>
        </div>
    );
}

export default Tablewidget;